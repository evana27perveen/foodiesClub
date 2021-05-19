import uuid
from datetime import date

from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.urls import reverse, reverse_lazy
from django.views.generic import UpdateView
from django.views.generic.base import View
from App_Blog.forms import ArticleForm, CommentModelForm, CategoryModelForm, CommentReplyForm, UpdateForm
from langdetect import detect
from translate import Translator
import re
from App_Blog.models import *
from googletrans import Translator as GoogleTranslator
from App_SignIn.forms import UserUpdateForm, WriterForm
from App_SignIn.models import Writer


# Create your views here.

def custom_filter(all_blogs):
    show_case = []
    for i in all_blogs:
        if len(i.blog_content) < 100:
            show_case.append(i.blog_content[:50] + "...")
        else:
            show_case.append(i.blog_content[:100] + "...")

    return show_case


def index(request):
    languages = LanguageModel.objects.all()
    category = CategoryModel.objects.all()
    Region = Article.objects.values_list('food_origin').filter(category__category_name='Food' and 'Recipe')
    origin = [x[0] for x in Region]
    all_blogs = Article.objects.filter(approval=True).order_by('-publish_date')
    order_by_view = Article.objects.filter(approval=True).order_by('-post_view')
    trending_post = list(order_by_view)[:3]
    search_by_sponsored = Article.objects.all().filter(sponsored=True)
    sponsored_post = list(search_by_sponsored)[:3]
    show_case = custom_filter(all_blogs)
    blogs = zip(all_blogs, show_case)
    contents = {'blogs': blogs, 'trending_video': trending_post, 'sponsored_post': sponsored_post, 'category': category,
                'languages': languages, 'Region': origin}
    return render(request, "App_Blog/home.html", context=contents)


def filtered_blog_by_language(request, language):
    all_languages = LanguageModel.objects.all()
    all_category = CategoryModel.objects.all()
    Region = Article.objects.values_list('food_origin').filter(category__category_name='Food' and 'Recipe')
    origin = [x[0] for x in Region]
    order_by_view = Article.objects.all().filter(approval=True).order_by('-post_view')
    search_by_sponsored = Article.objects.all().filter(approval=True, sponsored=True)
    if language == 'All':
        filtered_blogs = order_by_view
    else:
        filtered_blogs = Article.objects.all().filter(language__name=language, approval=True).order_by('-post_view')

    trending_post = list(order_by_view)[:3]
    sponsored_post = list(search_by_sponsored)[:3]
    container = {}
    for i in filtered_blogs:
        container['1'] = filtered_blogs
    show_case = custom_filter(filtered_blogs)
    blog_has = len(filtered_blogs)
    blogs = zip(filtered_blogs, show_case)
    contents = {'blogs': blogs, 'blog_has': blog_has, 'trending_video': trending_post, 'sponsored_post': sponsored_post,
                'category': all_category, 'languages': all_languages, 'Region': origin}
    return render(request, "App_Blog/language_filter_view.html", context=contents)


@login_required
def create_article(request):
    languages = LanguageModel.objects.all()
    translation = ''
    form = ArticleForm()
    categoryForm = CategoryModelForm()
    if request.method == 'POST':
        form = ArticleForm(request.POST, request.FILES)
        title = request.POST.get('blog_title')
        if form.is_valid():
            blog_form = form.save(commit=False)
            blog_form.author = request.user
            try:
                lang = detect(title)
                if lang != 'en':
                    translator = Translator(from_lang=lang, to_lang="English")
                    translation = str(translator.translate(title))
                blog_form.slug = re.sub(r'[^\w\s]', '', translation).replace(" ", "-") + "-" + str(uuid.uuid4())
                print("Local translator")
            except RuntimeError:
                translator = GoogleTranslator()
                output = translator.translate(title, dest="en")
                blog_form.slug = str(output).replace(" ", "-") + "-" + str(uuid.uuid4())
                print("Google Translator")
            except:
                blog_form.slug = title.replace(" ", "-") + "-" + str(uuid.uuid4())
            blog_form.save()
            messages.success(request, "Blog is under review!!!")
            return HttpResponseRedirect(reverse('App_Blog:blog-writing'))
    return render(request, "App_Blog/blog_writing.html",
                  context={'languages': languages, 'form': form, 'add_category_form': categoryForm})


def blogs_categorywise(request, this_category):
    language = LanguageModel.objects.all()
    category = CategoryModel.objects.get(category_name=this_category)
    all_blogs = Article.objects.filter(approval=True, category=category)
    Region = Article.objects.values_list('food_origin').filter(category__category_name='Food' and 'Recipe')
    origin = [x[0] for x in Region]
    category = CategoryModel.objects.all()
    order_by_view = Article.objects.all().order_by('-post_view')
    trending_post = list(order_by_view)[:3]
    search_by_sponsored = Article.objects.all().filter(sponsored=True)
    sponsored_post = list(search_by_sponsored)[:3]
    container = {}
    for i in all_blogs:
        container['1'] = all_blogs
    show_case = custom_filter(all_blogs)
    blogs = zip(all_blogs, show_case)
    contents = {'blogs': blogs, 'trending_video': trending_post, 'sponsored_post': sponsored_post, 'category': category,
                'languages': language, 'Region': origin}
    return render(request, 'App_Blog/category_wise_blogs.html', context=contents)


def blogs_originwise(request, this_origin):
    language = LanguageModel.objects.all()
    category = CategoryModel.objects.all()
    Region = Article.objects.values_list('food_origin').filter(category__category_name='Food' and 'Recipe')
    origin = [x[0] for x in Region]
    all_blogs = Article.objects.filter(approval=True, food_origin=this_origin)
    order_by_view = Article.objects.all().order_by('-post_view')
    trending_post = list(order_by_view)[:3]
    search_by_sponsored = Article.objects.all().filter(sponsored=True)
    sponsored_post = list(search_by_sponsored)[:3]
    container = {}
    for i in all_blogs:
        container['1'] = all_blogs
    show_case = custom_filter(all_blogs)
    blogs = zip(all_blogs, show_case)
    contents = {'blogs': blogs, 'trending_video': trending_post, 'sponsored_post': sponsored_post, 'category': category,
                'languages': language, 'Region': origin}
    return render(request, 'App_Blog/origin_wise_blogs.html', context=contents)


def blog_details(request, slug):
    languages = LanguageModel.objects.all()
    blog = Article.objects.all().get(slug=slug)
    if blog.author != request.user:
        blog.post_view += 1
    order_by_view = Article.objects.all().filter(approval=True).order_by('-post_view')
    trending_post = list(order_by_view)[:3]
    search_by_sponsored = Article.objects.all().filter(sponsored=True)
    sponsored_post = list(search_by_sponsored)[:3]
    liked_this_post = False
    if request.user.is_authenticated:
        like_or_not = Like.objects.filter(post=blog, author=request.user)
        if like_or_not:
            liked_this_post = True
        else:
            liked_this_post = False
    author = blog.author
    comments = Comment.objects.filter(post=blog)
    if request.method == 'POST' and 'base_comment_submit_button' in request.POST:
        if len(request.POST.get('Comment')) != 0:
            user_comment = Comment(post=blog, author=request.user, comment=request.POST.get('Comment'))
            user_comment.save()
            return HttpResponseRedirect(reverse('App_Blog:blog-details', kwargs={'slug': slug}))
        return HttpResponseRedirect(reverse('App_Blog:blog-details', kwargs={'slug': slug}))
    elif request.method == 'POST' and 'reply_comment_btn' in request.POST:
        if len(request.POST.get('reply_comment')) != 0:
            base_comment = Comment.objects.all().get(id=request.POST.get('base_comment'))
            reply = request.POST.get('reply_comment')
            try:
                reply_comment = CommentReplyModel(post=blog, author=request.user, reply_comment=reply,
                                                  base_comment=base_comment)
            except:
                print("Wrong")
            print(reply_comment)
            reply_comment.save()
            # user_reply = CommentReplyModel(post=blog)
        return HttpResponseRedirect(reverse('App_Blog:blog-details', kwargs={'slug': slug}))
    commentedTime = []
    for i in comments:
        # print(date.today() - i.comment_date.date())
        if date.today() == i.comment_date.date():
            commentedTime.append("Today")
        else:
            commentedTime.append(str((date.today() - i.comment_date.date()).days) + "   days")
    all_replies = CommentReplyModel.objects.all().filter(post=blog)
    content = {'blog': blog, 'author': author, 'liked': liked_this_post, 'comments': zip(comments, commentedTime),
               'trending_post': trending_post, 'sponsored_post': sponsored_post, 'all_replies': all_replies,
               'languages': languages}
    blog.save()
    return render(request, "App_Blog/blog_details.html", context=content)


@login_required
def liked(request, pk):
    blog = Article.objects.get(pk=pk)
    user = request.user
    already_liked = Like.objects.filter(post=blog, author=user)
    if not already_liked:
        like_post = Like(post=blog, author=user)
        like_post.save()
        return HttpResponseRedirect(reverse('App_Blog:blog-details', kwargs={'slug': blog.slug}))


@login_required
def disliked(request, pk):
    blog = Article.objects.get(pk=pk)
    user = request.user
    already_liked = Like.objects.filter(post=blog, author=user)
    already_liked.delete()
    return HttpResponseRedirect(reverse('App_Blog:blog-details', kwargs={'slug': blog.slug}))


def about_us(request):
    languages = LanguageModel.objects.all()
    content = {
        'languages': languages,
    }
    return render(request, 'About.html', context=content)


@login_required
def delete_comment(request, pk):
    comment = Comment.objects.get(id=pk)
    blog = Article.objects.get(id=comment.post.id)
    if comment.author == request.user or blog.author == request.user:
        comment.delete()
    return HttpResponseRedirect(reverse('App_Blog:blog-details', kwargs={'slug': blog.slug}))


@login_required
def delete_reply(request, pk):
    comment = CommentReplyModel.objects.get(id=pk)
    blog = Article.objects.get(id=comment.post.id)
    if comment.author == request.user or blog.author == request.user:
        comment.delete()
    return HttpResponseRedirect(reverse('App_Blog:blog-details', kwargs={'slug': blog.slug}))


class UpdateBlog(LoginRequiredMixin, UpdateView):
    model = Article
    fields = ['category', 'food_origin', 'language', 'header_image', 'location', 'blog_content']
    template_name = 'App_Blog/blog_edit.html'

    def get_context_data(self, **kwargs):
        languages = LanguageModel.objects.all()
        context = super().get_context_data(**kwargs)
        context['languages'] = languages
        return context

    def get_success_url(self, **kwargs):
        return reverse_lazy('App_SignIn:profile-view')


@login_required
def delete_blog(request, slug):
    blog = get_object_or_404(Article, slug=slug)
    messages.success(request, f'Successfully Deleted {blog.blog_title}!')
    blog.delete()
    return HttpResponseRedirect(reverse('App_SignIn:profile-view'))


def top_writer(request):
    languages = LanguageModel.objects.all()
    authors = CustomUser.objects.all()
    d = {}
    n = 0
    for i in authors:
        year = date.today().year
        month = date.today().month
        post_no = i.post_author.filter(publish_date__year=year, approval=True,
                                       publish_date__month=month).order_by('post_view').count()
        if post_no != 0:
            d[i.first_name + " " + i.last_name] = post_no
    diction = dict(sorted(d.items(), key=lambda item: item[1], reverse=True))
    d_2 = {}
    for i, j in diction.items():
        if n == 10:
            break
        d_2[i] = diction[i]
        n += 1
    content = {
        'authors': authors,
        'top_blogger': zip(d_2.keys(), d_2.values()),
        'languages': languages
    }
    return render(request, 'App_Blog/top_blogger.html', context=content)

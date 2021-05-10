import uuid
from datetime import date

from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.views.generic import UpdateView

from App_Blog.forms import ArticleForm, CommentModelForm, CategoryModelForm, CommentReplyForm
from langdetect import detect
from translate import Translator
import re
from App_Blog.models import *
from googletrans import Translator as GoogleTranslator

# Create your views here.
from App_SignIn.forms import UserUpdateForm, WriterForm
from App_SignIn.models import Writer


def index(request):
    languages = LanguageModel.objects.all()
    category = CategoryModel.objects.all()
    all_blogs = Article.objects.all().filter(approval=True).order_by('-publish_date')
    order_by_view = Article.objects.all().filter(approval=True).order_by('-post_view')
    trending_post = list(order_by_view)[:3]
    search_by_sponsored = Article.objects.all().filter(sponsored=True)
    sponsored_post = list(search_by_sponsored)[:3]
    show_case = []
    length_of_blogs = len(all_blogs)
    if len(all_blogs) > 0:
        for i in all_blogs:
            if len(i.blog_content) < 100:
                show_case.append(i.blog_content[:50] + "...")
            else:
                show_case.append(i.blog_content[:100] + "...")
    # print(show_case[:page])
    blogs = zip(all_blogs, show_case)
    contents = {'blogs': blogs, 'trending_video': trending_post, 'sponsored_post': sponsored_post, 'category': category,
                'languages': languages}
    return render(request, "App_Blog/home.html", context=contents)


def filtered_blog(request, language):
    languages = LanguageModel.objects.all()
    language_filterer = LanguageModel.objects.filter(name=language)
    category = CategoryModel.objects.all()
    all_blogs = Article.objects.all().filter(approval=True).order_by('-post_view')
    order_by_view = []
    for i in all_blogs:
        # print(f"{i.language}: {type(i.language)}")
        # print(f"Parameter-{language}: {type(language)}")
        if i.language.name == language:
            order_by_view.append(i)
    trending_post = list(order_by_view)[:3]
    search_by_sponsored = Article.objects.all().filter(sponsored=True)
    sponsored_post = list(search_by_sponsored)[:3]
    show_case = []
    container = {}
    length_of_blogs = len(order_by_view)
    for i in order_by_view:
        container['1'] = order_by_view
    if len(order_by_view) > 0:
        for i in order_by_view:
            if len(i.blog_content) < 100:
                show_case.append(i.blog_content[:50] + "...")
            else:
                show_case.append(i.blog_content[:100] + "...")
    # print(show_case[:page])
    blog_has = len(order_by_view)
    blogs = zip(order_by_view, show_case)
    contents = {'blogs': blogs, 'blog_has': blog_has, 'trending_video': trending_post, 'sponsored_post': sponsored_post,
                'category': category, 'languages': languages}
    return render(request, "App_Blog/filter_view.html", context=contents)


@login_required
def create_article(request):
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
                    translation = translator.translate(title)
                blog_form.slug = re.sub(r'[^\w\s]', '', translation).replace(" ", "-") + "-" + str(uuid.uuid4())
                print("Local translator")
            except RuntimeError:
                translator = GoogleTranslator()
                output = translator.translate(title, dest="en")
                blog_form.slug = output.replace(" ", "-") + "-" + str(uuid.uuid4())
                print("Google Translator")
            except:
                blog_form.slug = title.replace(" ", "-") + "-" + str(uuid.uuid4())
            blog_form.save()
            messages.success(request, "Blog is under review!!!")
            return HttpResponseRedirect(reverse('App_Blog:blog-writing'))
    return render(request, "App_Blog/blog_writing.html", context={'form': form, 'add_category_form': categoryForm})


def blogs_categorywise(request, this_category):
    category = CategoryModel.objects.get(category_name=this_category)
    print(category)
    all_blogs = Article.objects.filter(approval=True, category=category)
    print(all_blogs)
    category = CategoryModel.objects.all()
    order_by_view = Article.objects.all().order_by('-post_view')
    trending_post = list(order_by_view)[:3]
    search_by_sponsored = Article.objects.all().filter(sponsored=True)
    sponsored_post = list(search_by_sponsored)[:3]
    show_case = []
    container = {}
    for i in all_blogs:
        container['1'] = all_blogs
    if len(all_blogs) > 0:
        for i in all_blogs:
            if len(i.blog_content) < 100:
                show_case.append(i.blog_content[:50] + "...")
            else:
                show_case.append(i.blog_content[:100] + "...")
    blogs = zip(all_blogs, show_case)
    contents = {'blogs': blogs, 'trending_video': trending_post, 'sponsored_post': sponsored_post, 'category': category}
    return render(request, 'App_Blog/category_wise_blogs.html', context=contents)


def blog_details(request, slug):
    blog = Article.objects.all().get(slug=slug)
    blog.post_view += 1
    order_by_view = Article.objects.all().order_by('-post_view')
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
            # print(reply)
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
               }
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
    return render(request, 'About.html')


def delete_comment(request, pk):
    comment = Comment.objects.get(id=pk)
    blog = Article.objects.get(id=comment.post.id)
    if comment.author == request.user or blog.author == request.user:
        comment.delete()
    return HttpResponseRedirect(reverse('App_Blog:blog-details', kwargs={'slug': blog.slug}))


def delete_reply(request, pk):
    comment = CommentReplyModel.objects.get(id=pk)
    blog = Article.objects.get(id=comment.post.id)
    if comment.author == request.user or blog.author == request.user:
        comment.delete()
    return HttpResponseRedirect(reverse('App_Blog:blog-details', kwargs={'slug': blog.slug}))

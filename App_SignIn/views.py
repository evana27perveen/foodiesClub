from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm, PasswordChangeForm
from django.contrib.auth.models import Group
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from App_Blog.models import Article, LanguageModel
from App_SignIn.models import CustomUser
from App_SignIn.forms import *


# Create your views here.
def signup_system(request):
    form_user = UserSignUpForm()
    form_writer = WriterForm()
    if request.method == 'POST':
        form_user = UserSignUpForm(request.POST, request.FILES)
        form_writer = WriterForm(request.POST)
        if form_user.is_valid() and form_writer.is_valid():
            this_user = form_user.save(commit=False)
            this_user.is_staff = True
            this_user.save()
            this_writer = form_writer.save(commit=False)
            this_writer.user = this_user
            category = form_writer.cleaned_data.get('Category')
            if category == 'Restaurant Owner':
                group = Group.objects.get_or_create(name="Restaurant Owner")
                group[0].user_set.add(this_user)
            elif category == 'General User':
                group = Group.objects.get_or_create(name="Writer")
                group[0].user_set.add(this_user)
            this_writer.save()
            return HttpResponseRedirect(reverse('App_SignIn:signin'))  # After signup it will redirect to login page
    return render(request, 'App_SignIn/signup.html', context={'form1': form_user, 'form2': form_writer})


# User Category Finder
def is_moderator(user):
    return user.groups.filter(name="MODERATOR").exists()


def is_writer(user):
    return user.groups.filter(name="Writer").exists()


def signin_system(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            if is_writer(user):
                return HttpResponseRedirect(reverse('App_Blog:home'))
            else:
                return HttpResponseRedirect(reverse('App_Blog:home'))
    return render(request, 'App_SignIn/login.html')


def signout_system(request):
    logout(request)
    return HttpResponseRedirect(reverse('App_Blog:home'))


def contact_us_view(request):
    languages = LanguageModel.objects.all()
    form = ContactForm()
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            this_form = form.save(commit=False)
            this_form.user = request.user
            this_form.email = request.user.email
            this_form.save()
            messages.success(request, "Your opinion is very important to us. We will reply you soon.")
            return HttpResponseRedirect(reverse('App_SignIn:contact-us'))
    content = {'form': form, 'languages': languages}
    return render(request, 'App_SignIn/contact.html', context=content)


@login_required
def profile_view(request):
    languages = LanguageModel.objects.all()
    writer = Writer.objects.all().get(user=request.user)
    articles = Article.objects.filter(author=request.user)
    content = {'articles': articles, 'facebook': writer.facebook, 'linkedIn': writer.linked_in, 'languages': languages}
    return render(request, 'App_SignIn/profile_view.html', context=content)


def update_profile(request):
    languages = LanguageModel.objects.all()
    form1 = UserUpdateForm(instance=request.user)
    writer = Writer.objects.get(user=request.user)
    form2 = WriterForm(instance=writer)
    if request.method == 'POST':
        form1 = UserUpdateForm(request.POST, request.FILES, instance=request.user)
        form2 = WriterForm(request.POST, instance=writer)
        if form1.is_valid() and form2.is_valid():
            this_user = form1.save(commit=True)
            this_writer = form2.save(commit=False)
            this_writer.user = this_user
            this_writer.save()
            return HttpResponseRedirect(reverse('App_SignIn:profile-view'))
    content = {'form1': form1, 'form2': form2, 'languages': languages}
    return render(request, 'App_SignIn/profile_update.html', context=content)


def password_change(request):
    languages = LanguageModel.objects.all()
    form = PasswordChangeForm(request.user)
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, data=request.POST)
        if form.is_valid():
            form.save(commit=True)
            return HttpResponseRedirect(reverse('App_SignIn:profile-view'))
    return render(request, 'App_SignIn/password_change.html', context={'form': form, 'languages': languages})

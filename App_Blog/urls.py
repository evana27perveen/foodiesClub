from django.urls import path
from App_Blog import views

app_name = 'App_Blog'

urlpatterns = [
    path('', views.index, name='home'),
    path('blog-writing/', views.create_article, name='blog-writing'),
    path('blog_details/<str:slug>/', views.blog_details, name='blog-details'),
    path('like/<int:pk>/', views.liked, name="like-the-post"),
    path('dislike/<int:pk>/', views.disliked, name='dislike-the-post'),
    path('category=<str:this_category>/', views.blogs_categorywise, name='blogs-by-categories'),
    path('language=<str:language>/', views.filtered_blog, name='filtered-blog'),
    path('about-us/', views.about_us, name='about-us'),
    path('delete-comment/<int:pk>/', views.delete_comment, name='delete-comment'),
    path('delete-reply/<int:pk>/', views.delete_reply, name='delete-reply'),
]

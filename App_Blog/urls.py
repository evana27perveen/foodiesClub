from django.urls import path
from App_Blog import views

app_name = 'App_Blog'

urlpatterns = [
    path('', views.index, name='home'),
    path('blog-writing/', views.create_article, name='blog-writing'),
    path('blog-details/<str:slug>/', views.blog_details, name='blog-details'),
    path('top-writer/', views.top_writer, name='top-writer'),
    path('blog-update/<str:slug>/', views.UpdateBlog.as_view(), name='blog-update'),
    path('like/<int:pk>/', views.liked, name="like-the-post"),
    path('dislike/<int:pk>/', views.disliked, name='dislike-the-post'),
    path('category=<str:this_category>/', views.blogs_categorywise, name='blogs-by-categories'),
    path('language=<str:language>/', views.filtered_blog_by_language, name='filtered-blog'),
    path('origin=<str:this_origin>/', views.blogs_originwise, name='origin-wise-blogs'),
    path('about-us/', views.about_us, name='about-us'),
    path('delete-comment/<int:pk>/', views.delete_comment, name='delete-comment'),
    path('delete-reply/<int:pk>/', views.delete_reply, name='delete-reply'),
    path('<str:slug>/', views.delete_blog, name='delete-blog'),
]

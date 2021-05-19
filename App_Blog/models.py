from django.db import models
from image_optimizer.fields import OptimizedImageField

from App_SignIn.models import CustomUser
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
from PIL import Image
from django.utils.translation import gettext_lazy as _


# Create your models here.

class CategoryModel(models.Model):
    category_name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.category_name}"


class LanguageModel(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name}"


class Article(models.Model):
    author = models.ForeignKey(CustomUser, related_name='post_author', on_delete=models.CASCADE)
    blog_title = models.CharField(max_length=254, verbose_name='Put a Title')
    category = models.ForeignKey(CategoryModel, on_delete=models.DO_NOTHING, related_name='post_category')
    food_origin = models.CharField(max_length=100, blank=True, null=True, default=None)
    language = models.ForeignKey(LanguageModel, on_delete=models.CASCADE, related_name='article_language', default=None)
    header_image = OptimizedImageField(upload_to='header_images', optimized_image_output_size=(825, 600),
                                       optimized_image_resize_method='cover')
    location = models.CharField(max_length=200, default=None)
    slug = models.SlugField(max_length=254, unique=True, allow_unicode=True)
    blog_content = RichTextUploadingField()
    publish_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    approval = models.BooleanField(default=False)
    sponsored = models.BooleanField(default=False)
    post_view = models.IntegerField(default=0, null=True, blank=True)

    class Meta:
        ordering = ['-publish_date']

    def __str__(self):
        return f"{self.blog_title} by {self.author.first_name} {self.author.last_name} - {self.approval}"


class Like(models.Model):
    post = models.ForeignKey(Article, related_name='post_name', on_delete=models.CASCADE)
    author = models.ForeignKey(CustomUser, related_name='liker', on_delete=models.CASCADE)
    liked_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.author} likes {self.post}"


class Comment(models.Model):
    post = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comment_on_post')
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='commentator')
    comment = models.CharField(max_length=256)
    comment_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.author} commented on {self.post}"


class CommentReplyModel(models.Model):
    post = models.ForeignKey(Article, on_delete=models.CASCADE)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    reply_comment = models.CharField(max_length=256)
    comment_date = models.DateTimeField(auto_now=True)
    base_comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='comment_reply')

    def __str__(self):
        return f"{self.author} replied to {self.reply_comment}"

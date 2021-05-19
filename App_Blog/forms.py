from django.contrib.auth.forms import forms
from App_Blog.models import Article, Comment, CategoryModel, CommentReplyModel
from ckeditor_uploader.widgets import CKEditorUploadingWidget


class CategoryModelForm(forms.ModelForm):
    class Meta:
        model = CategoryModel
        fields = "__all__"


class ArticleForm(forms.ModelForm):
    blog_content = forms.CharField(widget=CKEditorUploadingWidget())

    class Meta:
        model = Article
        exclude = ['author', 'slug', 'approval', 'sponsored', 'post_view']


class CommentModelForm(forms.ModelForm):
    comment = forms.CharField(widget=forms.TextInput(attrs={'type': 'Textarea'}))

    class Meta:
        model = Comment
        fields = ['comment']


class CommentReplyForm(forms.ModelForm):
    class Meta:
        model = CommentReplyModel
        fields = ['reply_comment']


class UpdateForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = ['category', 'food_origin', 'language', 'header_image', 'location', 'blog_content']


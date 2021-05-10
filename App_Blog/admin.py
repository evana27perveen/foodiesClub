from django.contrib import admin
from App_Blog.models import Article, Like, Comment, CategoryModel, LanguageModel

admin.site.register(CategoryModel)
admin.site.register(Article)
admin.site.register(LanguageModel)
admin.site.register(Like)
admin.site.register(Comment)

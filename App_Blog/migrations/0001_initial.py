# Generated by Django 3.2 on 2021-05-10 15:13

import ckeditor_uploader.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('blog_title', models.CharField(max_length=254, verbose_name='Put a Title')),
                ('food_origin', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('header_image', models.ImageField(upload_to='header_images')),
                ('location', models.CharField(default=None, max_length=200)),
                ('slug', models.SlugField(allow_unicode=True, max_length=254, unique=True)),
                ('blog_content', ckeditor_uploader.fields.RichTextUploadingField()),
                ('publish_date', models.DateTimeField(auto_now_add=True)),
                ('update_date', models.DateTimeField(auto_now=True)),
                ('approval', models.BooleanField(default=False)),
                ('sponsored', models.BooleanField(default=False)),
                ('post_view', models.IntegerField(blank=True, default=0, null=True)),
            ],
            options={
                'ordering': ['-publish_date'],
            },
        ),
        migrations.CreateModel(
            name='CategoryModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.CharField(max_length=256)),
                ('comment_date', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='CommentReplyModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reply_comment', models.CharField(max_length=256)),
                ('comment_date', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='LanguageModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('liked_date', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
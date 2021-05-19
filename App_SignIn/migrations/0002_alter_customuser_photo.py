# Generated by Django 3.2 on 2021-05-16 06:43

from django.db import migrations
import image_optimizer.fields


class Migration(migrations.Migration):

    dependencies = [
        ('App_SignIn', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='photo',
            field=image_optimizer.fields.OptimizedImageField(upload_to='user_photo'),
        ),
    ]

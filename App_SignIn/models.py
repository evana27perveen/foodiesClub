from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
phone_regex = RegexValidator(regex=r"^\+?(88)01[3-9][0-9]{8}$", message=_('Enter Bangladeshi Number with country code'))


class CustomUser(AbstractUser):
    phone_number = models.CharField(validators=[phone_regex], max_length=20, verbose_name=_("Mobile Number"))
    Address = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='user_photo')


class Moderator(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='moderator')
    moderator_number = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"


categories = (
    ('Restaurant Owner', 'Restaurant Owner'),
    ('General User', 'General User'),
)


class Writer(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='writer')
    facebook = models.CharField(max_length=100, null=True, blank=True)
    linked_in = models.CharField(max_length=100, null=True, blank=True)
    Category = models.CharField(max_length=100, choices=categories)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}"


class FollowMe(models.Model):
    Followed_by = models.ForeignKey(Writer, on_delete=models.DO_NOTHING, related_name='follower')
    Following = models.ForeignKey(Writer, on_delete=models.DO_NOTHING, related_name='following')
    following_date = models.DateTimeField(auto_now=True)


class ContactModel(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.DO_NOTHING, related_name='contact_user')
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    Message = models.TextField()

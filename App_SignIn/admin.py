from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from App_SignIn.models import CustomUser, Writer, Moderator, FollowMe


# Register your models here.
class CustomUserAdmin(UserAdmin):
    add_form = UserCreationForm
    form = UserChangeForm
    model = CustomUser
    list_display = ['pk', 'first_name', 'last_name', 'email', 'username']
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('phone_number', 'Address', 'photo')}),
    )
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('phone_number', 'Address', 'photo')}),
    )


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Writer)
admin.site.register(Moderator)
admin.site.register(FollowMe)

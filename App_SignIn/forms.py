from django.contrib.auth.forms import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from App_SignIn.models import CustomUser, Writer, ContactModel


class UserSignUpForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'username', 'email', 'password1', 'password2', 'phone_number', 'Address',
                  'photo']


class UserUpdateForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'username', 'email', 'phone_number', 'Address',
                  'photo']


class WriterForm(forms.ModelForm):
    class Meta:
        model = Writer
        exclude = ['user', 'Category']


class UpdateUserForm(forms.ModelForm):
    class Meta:
        model = Writer
        exclude = ['user']


class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactModel
        fields = ['full_name', 'email', 'Message']

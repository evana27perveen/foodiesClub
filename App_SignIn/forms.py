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
    facebook = forms.CharField(required=False, widget=forms.TextInput(attrs={'placeholder': 'Facebook Link'}))
    linked_in = forms.CharField(required=False, widget=forms.TextInput(attrs={'placeholder': 'LinkedIn Link'}))

    class Meta:
        model = Writer
        exclude = ['user', 'Category']

    def __init__(self, *args, **kwargs):
        super(WriterForm, self).__init__(*args, **kwargs)
        self.fields['facebook'].label = "Facebook (optional)"
        self.fields['linked_in'].label = "LinkedIn (optional)"


class UpdateUserForm(forms.ModelForm):
    class Meta:
        model = Writer
        exclude = ['user']


class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactModel
        fields = ['full_name', 'email', 'Message']

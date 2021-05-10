from django.urls import path
from App_SignIn.views import *

app_name = 'App_SignIn'

urlpatterns = [
    path('signup/', signup_system, name='signup'),
    path('signin/', signin_system, name='signin'),
    path('signout', signout_system, name='signout'),
    path('contact-us/', contact_us_view, name='contact-us'),
    path('profile-view/', profile_view, name='profile-view'),
    path('update-profile/', update_profile, name='update-profile'),
    path('password/', password_change, name='password-change'),
]

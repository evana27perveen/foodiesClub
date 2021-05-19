import datetime

from django.test import TestCase
from App_Blog.models import CategoryModel, LanguageModel, Article, Like, Comment, CommentReplyModel
from App_SignIn.models import CustomUser

from django.core.files.uploadedfile import SimpleUploadedFile


class CategoryModelTestCase(TestCase):

    def test_CategoryModels_can_speak(self):
        """CategoryModels that can speak are correctly identified"""
        category_name = CategoryModel.objects.create(category_name="Home")
        self.assertEqual(str(category_name), "Home")


class LanguageModelTestCase(TestCase):

    def test_LanguageModels_can_speak(self):
        """LanguageModels that can speak are correctly identified"""
        language = LanguageModel.objects.create(name="Tamil")
        self.assertEqual(str(language), "Tamil")


class ArticleModelTest(TestCase):

    def test_ArticleModel_can_speak(self):
        image = SimpleUploadedFile(name='test_image.jpg', content=open('static/images/us/Evana.jpg', 'rb').read(),
                                   content_type='image/jpeg')
        user = CustomUser.objects.create(username='Maloy', password='1Haveadream', first_name='Maloy',
                                         last_name='Baroi', email='maloy170065@diit.info', )
        user.save()
        author = user
        blog_title = 'Hydrabadi Biryani'
        cat = CategoryModel.objects.create(category_name='Food')
        cat.save()
        category = cat
        origin = 'Hydrabad, India'
        lang = LanguageModel.objects.create(name="Bangla")
        lang.save()
        language = lang
        header_image = image
        location = 'Dhaka Bangladesh'
        slug = 'Hydrabadi-Biryani-01714775792'
        content = "<b>The biryani is too good.</b>"
        article = Article.objects.create(author=author, blog_title=blog_title, category=category, food_origin=origin,
                                         language=language, header_image=header_image, location=location, slug=slug,
                                         blog_content=content, publish_date=datetime.date, update_date=datetime.date,
                                         approval=True, sponsored=False)
        self.assertEqual(str(blog_title), 'Hydrabadi Biryani')

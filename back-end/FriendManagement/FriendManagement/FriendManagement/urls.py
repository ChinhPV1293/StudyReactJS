from django.urls import include, path
from django.contrib import admin
from rest_framework import routers
from Management import views
from rest_framework.authtoken.views import obtain_auth_token

router = routers.DefaultRouter()    
router.register(r"users", views.UserViewSet)
router.register(r"groups", views.GroupViewSet)
router.register(r"friend", views.FriendInfomationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('auth/',obtain_auth_token)
]

from django.urls import include, path
from django.contrib import admin
from rest_framework import routers
from . import views


router = routers.DefaultRouter()    
router.register(r"users", views.UserViewSet)
router.register(r"groups", views.GroupViewSet)
router.register(r"friend", views.FriendInfomationViewSet)
router.register(r"group_friends", views.GroupFriendViewSet)
router.register(r"friend_mini", views.FriendMiniVewSet)
# router.register(r"search", views.SearchView)
urlpatterns = [
    path('', include(router.urls)),
    path('search/',views.SearchView.as_view()),
]
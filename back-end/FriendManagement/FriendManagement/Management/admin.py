from django.contrib import admin
from .models import FriendInfomation, Group_Friend

@admin.register(FriendInfomation)
class FriendInfomationAdmin(admin.ModelAdmin):
    display = ['nameFriend']

@admin.register(Group_Friend)
class GroupInfoAdmin(admin.ModelAdmin):
    display = ['nameGroup']



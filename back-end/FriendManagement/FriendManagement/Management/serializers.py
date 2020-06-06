from django.contrib.auth.models import User, Group
from .models import FriendInfomation
from rest_framework import serializers


class UserSerializer (serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'password' ,'username', 'email', 'groups']


class GroupSerializer (serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class FriendInfomationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendInfomation
        fields = ['lastName', 'firstName', 'is_Men', 'Birthday']

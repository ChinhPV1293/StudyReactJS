from django.contrib.auth.models import User, Group
from .models import FriendInfomation, Group_Friend
from rest_framework import serializers


class UserSerializer (serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'password' ,'username', 'email', 'groups']


class GroupSerializer (serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class GroupFriendSerializer(serializers.ModelSerializer) :
    class Meta:
        model= Group_Friend
        fields = ['nameGroup', 'description']

class FriendInfomationSerializer(serializers.ModelSerializer):
    groups = GroupFriendSerializer(many=True)
    class Meta:
        model = FriendInfomation
        fields = ['id', 'nameFriend', 'is_Men', 'Birthday', 'phoneNumber', 'address','groups']

class FriendMiniInfomationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendInfomation
        fields = ['id', 'nameFriend','is_Men', 'Birthday', 'phoneNumber', 'address', 'groups']

    
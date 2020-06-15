from django.contrib.auth.models import User, Group
from .models import FriendInfomation, Group_Friend
from rest_framework import serializers


class UserSerializer (serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id','last_name','first_name', 'password' ,'username', 'email']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}
    
    def create(selft, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class GroupSerializer (serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class GroupFriendSerializer(serializers.ModelSerializer) :
    class Meta:
        model= Group_Friend
        fields = ['id','nameGroup', 'description']

class FriendInfomationSerializer(serializers.ModelSerializer):
    groups = GroupFriendSerializer(many=True)
    class Meta:
        model = FriendInfomation
        fields = ['id', 'nameFriend', 'is_Men', 'Birthday', 'phoneNumber', 'address','groups']

class FriendMiniInfomationSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendInfomation
        fields = ['id', 'nameFriend','is_Men', 'Birthday', 'phoneNumber', 'address', 'groups']

class ListMemberOfGroupSerializer(serializers.ModelSerializer):
    member= FriendMiniInfomationSerializer(many=True)
    class Meta:
        model= Group_Friend
        fields = ['id','nameGroup','member']

    
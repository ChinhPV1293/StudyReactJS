from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions, status
from rest_framework.response import Response
from .models import FriendInfomation, Group_Friend
from rest_framework.decorators import action
from .serializers import UserSerializer, GroupSerializer, FriendInfomationSerializer, GroupFriendSerializer,FriendMiniInfomationSerializer, ListMemberOfGroupSerializer
from rest_framework.authentication import TokenAuthentication


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class FriendInfomationViewSet(viewsets.ModelViewSet):
    serializer_class= FriendInfomationSerializer
    queryset= FriendInfomation.objects.all()
    authentication_class=[TokenAuthentication,]
    permission_classes = [permissions.IsAuthenticated]

class GroupFriendViewSet(viewsets.ModelViewSet):
    serializer_class= GroupFriendSerializer
    queryset= Group_Friend.objects.all()
    authentication_class=[TokenAuthentication,]
    permission_classes = [permissions.IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = ListMemberOfGroupSerializer(instance)
        return Response(serializer.data)

    def list(self, request, *args, **kw):
        currentUser = request.user
        queryset= Group_Friend.objects.filter(user=currentUser)
        serializer = GroupFriendSerializer(queryset, many=True)
        return Response(serializer.data)

class FriendMiniVewSet(viewsets.ModelViewSet):
    serializer_class= FriendMiniInfomationSerializer
    queryset= FriendInfomation.objects.all()
    authentication_class=[TokenAuthentication,]
    permission_classes = [permissions.IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = FriendInfomationSerializer(instance)
        return Response(serializer.data)

    def list(self, request, *args, **kw):
        currentUser = request.user
        queryset= FriendInfomation.objects.filter(user=currentUser)
        serializer = FriendMiniInfomationSerializer(queryset, many=True)
        return Response(serializer.data)


    # def create(self, request, *args, **kwargs):
    #     # serializer = self.get_serializer(data=request.data)
    #     # serializer.is_valid(raise_exception=True)
    #     # self.perform_create(serializer)
    #     # headers = self.get_success_headers(serializer.data)
    #     if 'groups' in request.data:
    #         id= request.data['groups__id']
    #         groups= Group.filter(id=id)


    
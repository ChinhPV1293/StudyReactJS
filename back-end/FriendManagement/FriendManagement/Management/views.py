from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework import permissions, status
from rest_framework.response import Response
from .models import FriendInfomation, Group_Friend
from rest_framework.decorators import action
from .serializers import UserSerializer, GroupSerializer, FriendInfomationSerializer, GroupFriendSerializer,FriendMiniInfomationSerializer, ListMemberOfGroupSerializer
from rest_framework.authentication import TokenAuthentication
from django.views.generic import View
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters,generics


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

class SearchView(generics.ListAPIView):
    queryset = FriendInfomation.objects.all()
    serializer_class = FriendMiniInfomationSerializer
    authentication_class=[TokenAuthentication,]
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request, *args, **kw):
        currentUser = request.user
        input = request.GET.get('nameFriend', '')
        queryset= FriendInfomation.objects.filter(user=currentUser, nameFriend__contains = input)
        serializer = FriendMiniInfomationSerializer(queryset, many=True)
        return Response(serializer.data)


    # @action(detail=True, methods=['GET'])
    # def searchFriend(self,request, pk=None):
    #     if 'input' in request.data:
    #         input = request.data['input']
    #         queryset= FriendInfomation.objects.filter(name__contains = input)
    #         serializer= FriendMiniInfomationSerializer(queryset, many=True)
    #         return Response(serializer.data)

    # def create(self, request, *args, **kwargs):
    #     # serializer = self.get_serializer(data=request.data)
    #     # serializer.is_valid(raise_exception=True)
    #     # self.perform_create(serializer)
    #     # headers = self.get_success_headers(serializer.data)
    #     if 'groups' in request.data:
    #         id= request.data['groups__id']
    #         groups= Group.filter(id=id)

# class SearchFriends(viewsets.ModelViewSet):
#     serializer_class= FriendMiniInfomationSerializer
#     queryset= FriendInfomation.objects.all()
#     authentication_class=[TokenAuthentication,]
#     permission_classes = [permissions.IsAuthenticated]

#     def list(self,request, pk=None):
#         if 'input' in request.data:
#             input = request.data['input']
#             currentUser = request.user
#             queryset= FriendInfomation.objects.filter(nameFriend__contains = input,user = currentUser)
#             serializer= FriendMiniInfomationSerializer(queryset, many=True)
#             return Response(serializer.data)

# def search(request):
#     input= request.GET.get('q', '')
#     if input is not None : 
#         currentUser = request.user
#         queryset= FriendInfomation.objects.filter(nameFriend__contains = input,user = currentUser)
#         serializer= FriendMiniInfomationSerializer(queryset, many=True)
#         return Response(serializer.data)
        

    
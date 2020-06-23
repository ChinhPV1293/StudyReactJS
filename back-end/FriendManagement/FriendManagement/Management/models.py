from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class FriendInfomation(models.Model):
    nameFriend = models.CharField(max_length=36, default= None, null=True, blank=True)
    is_Men= models.BooleanField(default= None)
    Birthday= models.DateField(default= '1990-01-01')
    phoneNumber= models.IntegerField( default= None, null=True, blank=True)
    address= models.TextField(default= None, null=True, blank=True)
    user= models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    def __str__(self):
        return self.nameFriend

class Group_Friend(models.Model):
    nameGroup= models.TextField(max_length=100, default= None)
    description= models.TextField(max_length=None)
    user= models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    member= models.ManyToManyField(FriendInfomation, related_name='groups')

    def __str__(self):
        return self.nameGroup




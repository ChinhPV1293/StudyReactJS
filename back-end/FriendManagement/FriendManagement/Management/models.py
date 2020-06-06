from django.db import models

# Create your models here.
class FriendInfomation(models.Model):
    lastName = models.CharField(max_length=36, default= None)
    firstName= models.CharField(max_length=36, default= None)
    is_Men= models.BooleanField(default= None)
    Birthday= models.DateField(default= '1990-01-01')
    def __str__(self):
        return self.firstName + ' '+ self.lastName

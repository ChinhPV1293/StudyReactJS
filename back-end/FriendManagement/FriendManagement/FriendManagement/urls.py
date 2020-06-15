from django.urls import include, path
from django.contrib import admin
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/',obtain_auth_token),
    path('management/', include('Management.urls')),

]

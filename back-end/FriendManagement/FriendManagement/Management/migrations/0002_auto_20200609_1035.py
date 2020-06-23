# Generated by Django 3.0.4 on 2020-06-09 03:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Management', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='FriendInfomation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nameFriend', models.CharField(blank=True, default=None, max_length=36, null=True)),
                ('is_Men', models.BooleanField(default=None)),
                ('Birthday', models.DateField(default='1990-01-01')),
                ('phoneNumber', models.IntegerField(blank=True, default=None, null=True)),
                ('address', models.TextField(blank=True, default=None, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Group_Friend',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nameGroup', models.TextField(default=None, max_length=100)),
                ('description', models.TextField()),
            ],
        ),
        migrations.DeleteModel(
            name='book',
        ),
        migrations.AddField(
            model_name='friendinfomation',
            name='groups',
            field=models.ManyToManyField(to='Management.Group_Friend'),
        ),
    ]
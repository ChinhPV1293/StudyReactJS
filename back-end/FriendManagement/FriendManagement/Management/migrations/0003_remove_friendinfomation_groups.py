# Generated by Django 3.0.4 on 2020-06-09 03:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Management', '0002_auto_20200609_1035'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='friendinfomation',
            name='groups',
        ),
    ]

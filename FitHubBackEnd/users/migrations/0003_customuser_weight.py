# Generated by Django 4.2.10 on 2024-03-04 01:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_customuser_age'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='Weight',
            field=models.CharField(blank=True, max_length=1, null=True),
        ),
    ]
# Generated by Django 4.2 on 2023-04-07 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('collaborative', '0018_alter_rating_movieid'),
    ]

    operations = [
        migrations.CreateModel(
            name='Token',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userId', models.IntegerField()),
                ('balance', models.IntegerField()),
                ('movies_today', models.IntegerField()),
            ],
        ),
    ]

# Generated by Django 4.1.7 on 2023-03-30 09:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('collaborative', '0007_rating_alter_movie_movieid_alter_movie_title'),
    ]

    operations = [
        migrations.CreateModel(
            name='Suggestions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userId', models.IntegerField()),
                ('suggestion_1', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
                ('suggestion_2', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
                ('suggestion_3', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
                ('suggestion_4', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
                ('suggestion_5', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
                ('suggestion_6', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
                ('suggestion_7', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
                ('suggestion_8', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
                ('suggestion_9', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
                ('suggestion_10', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
                ('suggestion_11', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
                ('suggestion_12', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
                ('suggestion_13', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
                ('suggestion_14', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
                ('suggestion_15', models.IntegerField(verbose_name=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='collaborative.movie', to_field='movieId'))),
            ],
        ),
    ]

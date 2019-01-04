# Generated by Django 2.0.6 on 2019-01-03 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('world', '0003_auto_20181231_2038'),
    ]

    operations = [
        migrations.CreateModel(
            name='BusPole',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pole_id', models.CharField(db_column='@id', max_length=50)),
                ('pole_type', models.CharField(db_column='@type', max_length=50)),
                ('pole_owl_sameas', models.CharField(db_column='owl:sameAs', max_length=50)),
                ('pole_date', models.CharField(db_column='dc:date', max_length=50)),
                ('pole_title', models.CharField(db_column='dc:title', max_length=50)),
                ('pole_kana', models.CharField(db_column='odpt:kana', max_length=50)),
                ('pole_long', models.CharField(db_column='geo:long', max_length=50)),
                ('pole_lat', models.CharField(db_column='geo:lat', max_length=50)),
                ('pole_route', models.CharField(db_column='odpt:busroutePattern', max_length=50)),
                ('pole_operator', models.CharField(db_column='odpt:operator', max_length=50)),
                ('pole_num', models.CharField(db_column='odpt:busstopPoleNumber', max_length=50)),
                ('pole_time', models.CharField(db_column='odpt:busstopTimetable', max_length=50)),
            ],
            options={
                'verbose_name_plural': 'toeibasupole',
                'verbose_name': '都営バス停留所',
            },
        ),
    ]

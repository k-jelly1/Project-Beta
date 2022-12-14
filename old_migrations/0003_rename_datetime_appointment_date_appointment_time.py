# Generated by Django 4.0.3 on 2022-08-03 18:01

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_remove_appointment_date_remove_appointment_time_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='datetime',
            new_name='date',
        ),
        migrations.AddField(
            model_name='appointment',
            name='time',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name=True),
            preserve_default=False,
        ),
    ]

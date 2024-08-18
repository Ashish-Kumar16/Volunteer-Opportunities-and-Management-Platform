# Generated by Django 5.0.7 on 2024-08-17 17:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('opportunities', '0010_remove_organization_about_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organization',
            name='mission_satement',
            field=models.TextField(blank=True, null=True, verbose_name='Mission Statement'),
        ),
        migrations.AlterField(
            model_name='organization',
            name='organization_description',
            field=models.TextField(blank=True, null=True, verbose_name='Organization Description'),
        ),
    ]

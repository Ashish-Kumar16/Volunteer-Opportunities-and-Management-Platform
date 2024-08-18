# Generated by Django 5.0.7 on 2024-08-15 17:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('opportunities', '0002_remove_organization_name_organization_address_line_1_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organization',
            name='country',
            field=models.CharField(choices=[('IN', 'India')], max_length=2, verbose_name='Country'),
        ),
        migrations.AlterField(
            model_name='organization',
            name='organization_name',
            field=models.CharField(max_length=255, verbose_name='Organization Name'),
        ),
        migrations.AlterField(
            model_name='organization',
            name='phone',
            field=models.CharField(max_length=20, verbose_name='Phone'),
        ),
        migrations.AlterField(
            model_name='organization',
            name='state',
            field=models.CharField(choices=[('AN', 'Andaman and Nicobar Islands'), ('AP', 'Andhra Pradesh'), ('AR', 'Arunachal Pradesh'), ('AS', 'Assam'), ('BR', 'Bihar'), ('CH', 'Chandigarh'), ('CT', 'Chhattisgarh'), ('DD', 'Dadra and Nagar Haveli and Daman and Diu'), ('DL', 'Delhi'), ('GA', 'Goa'), ('GJ', 'Gujarat'), ('HP', 'Himachal Pradesh'), ('HR', 'Haryana'), ('JH', 'Jharkhand'), ('JK', 'Jammu and Kashmir'), ('KA', 'Karnataka'), ('KL', 'Kerala'), ('LA', 'Ladakh'), ('LD', 'Lakshadweep'), ('MH', 'Maharashtra'), ('MN', 'Manipur'), ('ML', 'Meghalaya'), ('MZ', 'Mizoram'), ('NL', 'Nagaland'), ('OD', 'Odisha'), ('PY', 'Puducherry'), ('PB', 'Punjab'), ('RJ', 'Rajasthan'), ('SK', 'Sikkim'), ('TN', 'Tamil Nadu'), ('TS', 'Telangana'), ('TR', 'Tripura'), ('UP', 'Uttar Pradesh'), ('UT', 'Uttarakhand'), ('WB', 'West Bengal')], max_length=2, verbose_name='State'),
        ),
        migrations.AlterField(
            model_name='organization',
            name='website',
            field=models.URLField(verbose_name='Website'),
        ),
        migrations.AlterField(
            model_name='organization',
            name='zip_code',
            field=models.CharField(max_length=10, verbose_name='Zip Code'),
        ),
    ]

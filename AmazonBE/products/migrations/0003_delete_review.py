# Generated by Django 4.1.7 on 2023-03-19 11:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_remove_products_category_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Review',
        ),
    ]
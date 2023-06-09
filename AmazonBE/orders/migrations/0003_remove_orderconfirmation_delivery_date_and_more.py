# Generated by Django 4.1.7 on 2023-03-19 11:56

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_remove_cart_mode_of_payment_remove_cart_product_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderconfirmation',
            name='delivery_date',
        ),
        migrations.RemoveField(
            model_name='orderconfirmation',
            name='ordered_by',
        ),
        migrations.RemoveField(
            model_name='orderconfirmation',
            name='product_details',
        ),
        migrations.RemoveField(
            model_name='orderconfirmation',
            name='total_amount',
        ),
        migrations.RemoveField(
            model_name='shippingaddress',
            name='full_name',
        ),
        migrations.RemoveField(
            model_name='shippingaddress',
            name='user',
        ),
        migrations.AddField(
            model_name='orderconfirmation',
            name='address_line_1',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='orderconfirmation',
            name='city',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='orderconfirmation',
            name='country',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='orderconfirmation',
            name='state',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='orderconfirmation',
            name='zip_code',
            field=models.CharField(default='', max_length=10),
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='first_name',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='shippingaddress',
            name='last_name',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='orderconfirmation',
            name='order_id',
            field=models.UUIDField(default=uuid.uuid4, editable=False),
        ),
        migrations.AlterField(
            model_name='shippingaddress',
            name='address_line_1',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='shippingaddress',
            name='city',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='shippingaddress',
            name='country',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='shippingaddress',
            name='state',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='shippingaddress',
            name='zip_code',
            field=models.CharField(default='', max_length=10),
        ),
    ]

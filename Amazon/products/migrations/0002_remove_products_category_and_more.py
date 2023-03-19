# Generated by Django 4.1.7 on 2023-03-19 05:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='products',
            name='category',
        ),
        migrations.RemoveField(
            model_name='products',
            name='count_instock',
        ),
        migrations.RemoveField(
            model_name='products',
            name='date_of_mfg',
        ),
        migrations.RemoveField(
            model_name='products',
            name='description',
        ),
        migrations.RemoveField(
            model_name='products',
            name='offer',
        ),
        migrations.RemoveField(
            model_name='products',
            name='product_id',
        ),
        migrations.AddField(
            model_name='products',
            name='brand',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='products',
            name='count',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='products',
            name='details',
            field=models.TextField(default=None),
        ),
        migrations.AddField(
            model_name='products',
            name='img',
            field=models.TextField(default=None),
        ),
        migrations.AddField(
            model_name='products',
            name='rating',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
        migrations.AlterField(
            model_name='products',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='products',
            name='name',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AlterField(
            model_name='products',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
        migrations.DeleteModel(
            name='Categories',
        ),
        migrations.DeleteModel(
            name='Description',
        ),
    ]

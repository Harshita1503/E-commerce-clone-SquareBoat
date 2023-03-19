from django.db import models

from products.models import Products
from user.models import Login, Register

class Cart(models.Model):
    name = models.CharField(default = None,max_length=100)
    id = models.IntegerField(primary_key=True)
    count = models.IntegerField(default=0)
    img = models.TextField(default = None) 
    price = models.DecimalField(default = 0.0 ,max_digits=10, decimal_places=2)
    brand = models.CharField( default= None ,max_length=100)
    details = models.TextField(default=None) 
    rating = models.DecimalField(default= 0.0 ,max_digits=10, decimal_places=2)
    qty = models.IntegerField(default=0)
    
# class shippingaddress():
    

# class order()
#     product_details = models.TextField()
#     shipping_address = 
#     total_amount = models.DecimalField(max_digits=8, decimal_places=2)


class ShippingAddress(models.Model):
    first_name = models.ForeignKey(Login, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100)
    address_line_1 = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=10)


class OrderConfirmation(models.Model):
    order_id = models.CharField(max_length=255)
    product_details = models.TextField()
    delivery_date = models.DateField()
    total_amount = models.DecimalField(max_digits=8, decimal_places=2)
    ordered_by = models.ForeignKey(Register, on_delete=models.CASCADE)

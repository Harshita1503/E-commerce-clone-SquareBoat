import uuid
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
    

class ShippingAddress(models.Model):
    firstname = models.CharField(max_length=100,default="")
    lastname = models.CharField(max_length=100,default="")
    address = models.CharField(max_length=100,default="")
    zip = models.CharField(max_length=10,default="")


class OrderConfirmation(models.Model):
    orderid = models.UUIDField(default=uuid.uuid4, editable=False)
    address = models.CharField(max_length=100 , default="")
    zip = models.CharField(max_length=10,default="")

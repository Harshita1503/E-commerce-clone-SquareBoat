from django.db import models

from user.models import Register

class Products(models.Model):
    name = models.CharField(default = None,max_length=100)
    id = models.IntegerField(primary_key=True)
    count = models.IntegerField(default=0)
    img = models.TextField(default = None) 
    price = models.DecimalField(default = 0.0 ,max_digits=10, decimal_places=2)
    brand = models.CharField( default= None ,max_length=100)
    details = models.TextField(default=None) 
    rating = models.DecimalField(default= 0.0 ,max_digits=10, decimal_places=2)

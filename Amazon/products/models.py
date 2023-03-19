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
    

    # def get_images(self):
    #     return self.img.split(',') 

class Review(models.Model):
    product_id =  models.ForeignKey(Products, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comments = models.TextField()
    added_by = models.ForeignKey(Register, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)
from django.db import models


class Register(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    phonenumber = models.CharField(max_length=20)
    
    def __str__(self):
        return self.name


class Login(models.Model):
    email = models.EmailField()
    password = models.CharField(max_length=255)

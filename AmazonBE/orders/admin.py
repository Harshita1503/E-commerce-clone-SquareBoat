from django.contrib import admin
from .models import Cart,OrderConfirmation,ShippingAddress

admin.site.register(Cart)

admin.site.register(OrderConfirmation)
admin.site.register(ShippingAddress)
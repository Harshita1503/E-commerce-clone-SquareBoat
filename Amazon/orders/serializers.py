from rest_framework import serializers
from .models import Cart, OrderConfirmation, ShippingAddress

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'

class OrderConfirmationSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderConfirmation
        fields = '__all__'

class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'



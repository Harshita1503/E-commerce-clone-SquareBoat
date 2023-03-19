import uuid
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Cart, OrderConfirmation
from .serializers import CartSerializer, OrderConfirmationSerializer ,ShippingAddressSerializer
from datetime import datetime, timedelta

class AddToCartView(APIView):
    def post(self, request):
        data = request.data
        serializer = CartSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


    def get(self, request):
    
        cart_items = Cart.objects.all()
        serializer = CartSerializer(cart_items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    
    def delete(self, request):
        cart_item = Cart.objects.get()
        cart_item.delete()
        return Response(status=status.HTTP_200_OK)


class ShippingAddressView(APIView):    
    def post(self, request):
        serializer = ShippingAddressSerializer(data=request.data)

        address=request.data.get('address')
        zip=request.data.get('zip')
        if serializer.is_valid():
            OrderConfirmation.objects.get_or_create(address=address,zip=zip)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class OrderConfirmationView(APIView):
    
    def get(self, request):
        orders = OrderConfirmation.objects.all()
        serializer = OrderConfirmationSerializer(orders, many=True)
        return Response(serializer.data)
    
    def delete(self, request, pk):
        order = OrderConfirmation.objects.get(pk=pk)
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

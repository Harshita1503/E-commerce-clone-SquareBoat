import uuid
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Cart, OrderConfirmation
from .serializers import CartSerializer, OrderConfirmationSerializer ,ShippingAddressSerializer
from datetime import datetime, timedelta
class PlaceOrder(APIView):
    def post(self, request):
        # get data from request
        data = request.data

        # create cart serializer with data
        cart_serializer = CartSerializer(data=data)
        if cart_serializer.is_valid():
            # get cart data from serializer
            cart_data = cart_serializer.validated_data

            # get product and quantity from cart data
            for every_obj in cart_data:
                product = every_obj['product']
                quantity = every_obj['quantity']
                product_details = ', '.join(f"{every_obj.product.name}")

                # calculate total amount
                total = total+( every_obj.product.price * every_obj.quantity)

            # create order confirmation serializer data
            current_date = datetime.today()

            # Add two days
            delivery_date = current_date + timedelta(days=2)
            order_confirmation_data = {
                'order_id': str(uuid.uuid4()), # generate a unique order ID
                'product_details': product_details,
                'delivery_date': delivery_date, # set delivery date
                'total_amount': total,
                'ordered_by': request.user # assuming user is logged in
                
            }

            # create order confirmation serializer with data
            order_confirmation_serializer = OrderConfirmationSerializer(data=order_confirmation_data)
            if order_confirmation_serializer.is_valid():
                # save cart and order confirmation data to database
                cart = cart_serializer.save(total=total)
                order_confirmation = order_confirmation_serializer.save()

                # return success response
                return Response({'cart': cart_serializer.data, 'order_confirmation': order_confirmation_serializer.data}, status=status.HTTP_201_CREATED)
            else:
                # return error response if order confirmation serializer is not valid
                return Response(order_confirmation_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            # return error response if cart serializer is not valid
            return Response(cart_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AddToCartView(APIView):
    def post(self, request):
        data = request.data
        serializer = CartSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


    # def get(self,request):

    
    # def delete(self, request, pk):
    #     cart_item = Cart.objects.get(pk=pk)
    #     cart_item.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)


class ShippingAddressView(APIView):
    def post(self, request):
        serializer = ShippingAddressSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


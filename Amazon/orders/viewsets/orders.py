from rest_framework import viewsets, status
from rest_framework.response import Response
from orders.serializers import OrderSerializer, OrderConfirmationSerializer
from orders.models import Cart, OrderConfirmation


class OrderViewSet(viewsets.ViewSet):
    serializer_class = OrderSerializer
    confirmation_serializer_class = OrderConfirmationSerializer

    def create(self, request):
        cart_items = Cart.objects.filter(user=request.user)  # get all cart items for the user
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        order = serializer.save()  # create a new order object
        order_items = []
        for item in cart_items:
            order_items.append({'product': item.product, 'quantity': item.quantity})
        order.items.set(order_items)  # set order items using many-to-many relationship
        cart_items.delete()  # delete cart items after placing the order

        # create order confirmation
        confirmation_serializer = self.confirmation_serializer_class(data=request.data, context={'request': request})
        confirmation_serializer.is_valid(raise_exception=True)
        confirmation = confirmation_serializer.save(order=order)  # create a new order confirmation object

        return Response({'message': 'Order placed successfully!', 'order_id': order.id}, status=status.HTTP_201_CREATED)
















# class OrderViewSet(viewsets.ModelViewSet):
#     serializer_class = OrderSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     @action(detail=False, methods=['post'])
#     def place_order(self, request):
#         cart_queryset = Cart.objects.filter(user=request.user)
#         if cart_queryset.exists():
#             order_serializer = OrderSerializer(data=request.data)
#             if order_serializer.is_valid():
#                 order = order_serializer.save(user=request.user)
#                 order_total = 0
#                 for cart in cart_queryset:
#                     order_total += cart.total
#                     order.order_items.add(cart.product)
#                     cart.delete()
#                 order.total = order_total
#                 order.save()
#                 return Response(order_serializer.data, status=status.HTTP_201_CREATED)
#             return Response(order_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         return Response({'detail': 'No items in cart.'}, status=status.HTTP_400_BAD_REQUEST)

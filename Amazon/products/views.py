from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ProductSerializer
from .models import Products


class ProductList(APIView):
    
    def get(self, request):
        products = Products.objects.all()
        search_query = request.GET.get('q')
        if search_query:
            products = products.filter(name__icontains=search_query)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

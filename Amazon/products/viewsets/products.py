from rest_framework import viewsets, filters
from products.serializers import ProductSerializer
from products.models import Product


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    # filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'categories__name'] 

    def get_queryset(self):
        queryset = Product.objects.all()
        search_query = self.request.GET.get('search', None)
        if search_query:
            queryset = queryset.filter(name__icontains=search_query)
        return queryset

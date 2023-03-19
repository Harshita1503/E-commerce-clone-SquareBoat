from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from user.models import Register
from user.serializers import RegisterSerializer ,LoginSerializer
from django.contrib.auth.hashers import check_password
from django.contrib.auth import login
from django.http import HttpResponseBadRequest

class RegisterAPIView(APIView):

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(APIView):

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = Register.objects.get(email=email) 
        if check_password(password, user.password):
                login(request, user)
                return Response({'message': 'Logged in successfully!'}, status=status.HTTP_200_OK)
        else:
            return HttpResponseBadRequest("Incorrect username or password")

        # serializer = LoginSerializer(data=request.data)
        # if serializer.is_valid():
        #     user = serializer.validated_data['user']
        #     return Response({'email': user.email}, status=status.HTTP_200_OK)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework import serializers
from .models import Register
from django.contrib.auth import authenticate

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields = "__all__"

    def create(self, validated_data):
        user = Register(
            name=validated_data['name'],
            email=validated_data['email'],
            password=validated_data['password'],
            phonenumber=validated_data['phonenumber']
        )
        user.save()
        return user



class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')
        if email and password:
            user = authenticate(email=email, password=password)
            if user:
                data['user'] = user
                return data
            raise serializers.ValidationError('Unable to log in with provided credentials.')
        else:
            raise serializers.ValidationError('Must include "email" and "password".')

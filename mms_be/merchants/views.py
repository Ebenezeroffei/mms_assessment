from rest_framework.viewsets import ModelViewSet
from merchants import models as merchant_models
from merchants import serializers as merchant_serializers


class MerchantView(ModelViewSet):
    serializer_class = merchant_serializers.MerchantSerializer
    queryset = merchant_models.Merchant.objects.all()

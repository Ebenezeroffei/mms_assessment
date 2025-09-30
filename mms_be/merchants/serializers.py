from rest_framework import serializers
from merchants import models as merchant_models


class MerchantSerializer(serializers.ModelSerializer):
    class Meta:
        model = merchant_models.Merchant
        fields = "__all__"

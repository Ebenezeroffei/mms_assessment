from import_export.resources import ModelResource
from merchants import models as merchant_models


class MerchantResource(ModelResource):
    class Meta:
        model = merchant_models.Merchant

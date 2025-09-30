from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from merchants import resources as merchant_resources
from merchants import models as merchant_models


@admin.register(merchant_models.Merchant)
class MerchantAdmin(ImportExportModelAdmin):
    resource_classes = (merchant_resources.MerchantResource,)
    list_display = ["name", "business_registration_number", "status", "email", "phone"]
    list_filter = ["status"]
    search_fields = ["name", "email", "phone", "business_registration_number"]

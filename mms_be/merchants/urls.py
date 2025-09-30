from django.urls import path, include
from rest_framework.routers import SimpleRouter
from merchants import views as merchant_views

router = SimpleRouter()
router.register("merchants", merchant_views.MerchantView, "merchants")

app_name = "merchants"
urlpatterns = [path("", include(router.urls))]

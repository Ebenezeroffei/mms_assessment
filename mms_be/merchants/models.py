from django.db import models
from core import models as core_models


# Create your models here.
class Merchant(core_models.BasePrimaryKeyModel, core_models.BaseTimestampModel):
    class Status(models.TextChoices):
        ACTIVE = "Active"
        PENDING = "Pending"
        SUSPENDED = "Suspended"

    name = models.CharField(max_length=200)
    business_registration_number = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    status = models.CharField(
        max_length=50, choices=Status.choices, default=Status.PENDING
    )

    def __str__(self):
        return self.name

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["business_registration_number"],
                name="unique_business_registration_number",
            )
        ]

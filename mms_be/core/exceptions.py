from django.db import IntegrityError
from rest_framework.views import exception_handler
from rest_framework import status
from rest_framework.response import Response


def custom_exception_handler(exc, context):
    if isinstance(exc, IntegrityError):
        return Response(
            data={
                "errors": {
                    "detail": "A record with this value already exists.",
                },
                "status_code": status.HTTP_400_BAD_REQUEST,
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    response = exception_handler(exc, context)

    if response is not None:
        status_code = response.status_code
        data = response.data
        token_expiry_code = "token_not_valid"
        errors = {}
        if (
            status_code == status.HTTP_401_UNAUTHORIZED
            and data.get("code", "") == token_expiry_code
        ):
            data = {
                "errors": {
                    "detail": "Token is expired",
                },
            }
        else:
            for key, value in data.items():
                if isinstance(value, list):
                    errors[key] = "; ".join(value)
                else:
                    errors[key] = value
            data = {"errors": errors}

        data["status_code"] = status_code
        response.data = data

    return response

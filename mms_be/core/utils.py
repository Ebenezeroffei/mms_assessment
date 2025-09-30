from urllib.parse import parse_qs, urlparse
from rest_framework.response import Response
from rest_framework.pagination import CursorPagination


class CoreUtils:
    @staticmethod
    def remove_data(obj: dict, key: str):
        obj.pop(key)

    @staticmethod
    def remove_dates_from_data(obj: dict):
        obj.pop("created_at")
        obj.pop("updated_at")


class CustomPagination(CursorPagination):
    page_size = 50
    ordering = "-created_at"

    def get_cursor(self, url) -> str:
        parsed_url = urlparse(url)
        return parse_qs(parsed_url.query)["cursor"][0]

    def get_paginated_response(self, data):
        next_page = self.get_cursor(self.get_next_link()) if self.has_next else None
        prev_page = (
            self.get_cursor(self.get_previous_link()) if self.has_previous else None
        )
        return Response(
            {
                "pagination": {
                    "currentPage": self.page.number
                    if hasattr(self.page, "number")
                    else 1,
                    "next": next_page,
                    "prev": prev_page,
                },
                "results": data,
            }
        )

class CoreUtils:
    @staticmethod
    def remove_data(obj: dict, key: str):
        obj.pop(key)

    @staticmethod
    def remove_dates_from_data(obj: dict):
        obj.pop("created_at")
        obj.pop("updated_at")

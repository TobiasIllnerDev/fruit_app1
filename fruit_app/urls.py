from django.urls import path

from .views import send_fruits

app_name = "fruit_app"

urlpatterns = [
    path("", send_fruits, name="send_fruits"),
]

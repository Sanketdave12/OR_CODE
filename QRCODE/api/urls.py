from django.urls import path
from .views import MenuList,OrderList

urlpatterns = [
    path('menu/',MenuList.as_view(), name='menu'),
    path('checkout/',OrderList.as_view(), name='order'),
]

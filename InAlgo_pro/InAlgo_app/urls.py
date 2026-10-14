from django.urls import path
# pyrefly: ignore [missing-import]
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('visualization/<str:ds_type>/', views.visualization, name='visualization'),
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login_view'),
    path('logout/', views.logout_view, name='logout'),
    path('chatbot/', views.chatbot, name='chatbot'),
    path('explain-step/', views.explain_step, name='explain_step'),
    path('<str:ds_type>/', views.visualization, name='visualization'),
]
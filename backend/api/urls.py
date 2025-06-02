from django.urls import path
from . import views

urlpatterns = [
    path('health/', views.health_check, name='health_check'),
    path('echo-link/', views.echo_link, name='echo_link'),
    path('get-transcript/', views.get_transcript, name='get_transcript'),
] 
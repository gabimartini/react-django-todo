from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.TodoApiView.as_view()),
    path('tasks/<int:pk>', views.TodoApiView.as_view()),
    path('add/', views.AddApiView.as_view()),
    path('update/<int:pk>', views.EditApiView.as_view()),
    path('delete/<int:pk>', views.DeleteApiView.as_view())
]

from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.TodoApiView.as_view(), name='todos'),
    path('tasks/<int:pk>', views.TodoApiView.as_view(), name='todo'),
    path('add/', views.AddApiView.as_view()),
    path('update/<int:pk>', views.EditApiView.as_view(), name='update'),
    path('delete/<int:pk>', views.DeleteApiView.as_view())
]

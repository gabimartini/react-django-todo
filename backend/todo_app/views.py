from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer
from django.shortcuts import get_object_or_404


class TodoApiView(APIView):
    def get(self, request, pk=None, format=None):
        id = pk
        if id:
            todo = Todo.objects.get(id=id)
            serializer = TodoSerializer(todo)
            return Response(serializer.data)
        else:
            """Return a list of Todo"""
            todo = Todo.objects.all()
            serializer = TodoSerializer(todo, many=True)
            return Response(serializer.data)


class AddApiView(APIView):
    serializer_class = TodoSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EditApiView(APIView):
    def put(self, request, pk=None):
        id = pk
        todo = Todo.objects.get(id=id)
        serializer = TodoSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteApiView(AddApiView):
    def delete(self, request, pk=None,):
        id = pk
        todo = get_object_or_404(Todo, id=id)
        if todo:
            todo.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_400_BAD_REQUEST)

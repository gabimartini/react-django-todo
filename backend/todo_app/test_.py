import json

from django.test import TestCase
from .models import Todo
from .serializers import TodoSerializer


class TodoTest(TestCase):
    wrong_id = 0
    """Add todo"""
    todo = Todo.objects.create(
        title='this is a new title', content='this is a new content')

    def test_post(self):
        assert self.todo.complete == False
        assert self.todo.title == 'this is a new title'

    def test_get_by_id(self):
        """get todo by id"""
        response = self.client.get(
            f"/tasks/{self.todo.id}",
            headers={"host": "localhost:8000"},
        )
        todo = Todo.objects.get(id=self.todo.id)
        serializer = TodoSerializer(todo)
        assert serializer.data == serializer.data
        assert response.status_code == 200

    def test_get_all(self):
        """get all todo"""
        response = self.client.get(
            "/tasks/",
            headers={"host": "localhost:8000"},
        )
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)
        assert response.data == serializer.data
        assert len(serializer.data) > 0
        assert response.status_code == 200

    def test_update(self):
        """update todo"""
        response = self.client.put(
            f"/update/{self.todo.id}",
            headers={"host": "localhost:8000"},
            data=json.dumps({"title": 'this is a new title',
                            "content": 'this is a new content', "complete": True}),
            content_type='application/json'
        )
        todo = Todo.objects.get(id=self.todo.id)
        serializer = TodoSerializer(todo, data={"complete": True})
        if serializer.is_valid():
            serializer.save()
            assert response.status_code == 200
            assert serializer.data == response.data

    def test_delete(self):
        """delete todo"""
        response = self.client.delete(
            f"/delete/{self.todo.id}",
            headers={"host": "localhost:8000"},
        )
        assert response.status_code == 204

    def test_delete_invalid(self):
        response = self.client.delete(f"/delete/{self.wrong_id}",
                                      headers={"host": "localhost:8000"},
                                      )
        assert response.status_code == 404

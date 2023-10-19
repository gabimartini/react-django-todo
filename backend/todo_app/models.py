from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=250)
    content = models.CharField(max_length=500)
    complete = models.BooleanField(default=False)


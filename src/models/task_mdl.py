from pydantic import BaseModel

class Task(BaseModel):
    title: str

class TaskUpdate(Task):
    active: bool


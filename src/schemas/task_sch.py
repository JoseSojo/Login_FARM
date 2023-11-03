def list_serial_task(tasks) -> list:
    return [task_serial(task) for task in tasks]

def task_serial(task) -> dict:
    return {
        "id": str(task['_id']),
        "title": task['title'],
        "date": str(task['date']),
        "active": bool(task['active']),
        "user_id": str(task['user_id'])
    }

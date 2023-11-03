from fastapi import APIRouter, Header, HTTPException, status, Depends
from fastapi.security import OAuth2PasswordBearer
from typing import Annotated
from bson.objectid import ObjectId
from datetime import datetime
from ..db.database import collection_task
from ..utils.AuthJWT import verify_access_token
from ..schemas.task_sch import list_serial_task
from ..models.task_mdl import Task, TaskUpdate

router = APIRouter(prefix='/task')

@router.post('/')
async def save_new_task(token: Annotated[str | None, Header()] = None, dat:Task = None):
    try:
        data = dict(dat)
        print(data, token)
        user = verify_access_token(token, 'DANGER_TASK_AUTH')
        
        create = {
            "title":data['title'],
            "active": False,
            "user_id": user['id'],
            "date": str(datetime.now())
        }

        print(create)
        collection_task.insert_one(create)

        return {'response':'SUCCESS_CREATE_NEW_TASK', 'code':200, 'body':None }

    except Exception as ex:
        print(ex)
        return {'response':'DANGER_CREATE_NEW_TASK', 'code':400 }
    
@router.get('/')
async def get_all_task(token: Annotated[str | None, Header()] = None):
    try:
        user = verify_access_token(token, 'DANGER_TASK_AUTH')
        
        tasks = list_serial_task(collection_task.find({ "user_id": user['id'] }))

        return {'response':'SUCCESS_GET_ALL_TASKS', 'code':200, 'body':tasks }

    except Exception as ex:
        print(ex)
        return {'response':'DANGER_GET_ALL_TASKS', 'code':400 }

@router.put('/{id}')
async def update_task(token: Annotated[str | None, Header()] = None, dat:TaskUpdate = None, id:str=None):
    try:
        data = dict(dat)
        user = verify_access_token(token, 'DANGER_TASK_AUTH')
        
        update = {
            "title":data['title'],
            "active": data['active']
        }

        collection_task.find_one_and_update({ "_id": ObjectId(id) }, {"$set": update})

        return {'response':'SUCCESS_UPDATE_TASK', 'code':200, 'body':None }

    except Exception as ex:
        print(ex)
        return {'response':'DANGER_UPDATE_TASK', 'code':400 }
      
@router.delete('/{id}')
async def delete_task(token: Annotated[str | None, Header()] = None, id:str=None):
    try:
        verify_access_token(token, 'DANGER_TASK_AUTH')

        collection_task.find_one_and_delete({ "_id": ObjectId(id) })
        return {'response':'SUCCESS_DELETE_TASK', 'code':200, 'body':None }

    except Exception as ex:
        print(ex)
        return {'response':'DANGER_DELETE_TASK', 'code':400 }

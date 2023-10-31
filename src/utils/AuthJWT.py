from fastapi import HTTPException
from jose import jwt, JWTError
from datetime import datetime, timedelta
from dotenv import load_dotenv
import os


load_dotenv()
SECRET_KEY = os.environ.get('SECRET_KY')
ALGORITHM = 'HS256'

def create_access_token(username:str, user_id:str, expires_delta=timedelta):
    encode = {'sub':username, 'id':user_id}
    expires = datetime.utcnow() + expires_delta
    encode.update({'exp':expires})
    return jwt.encode(encode, SECRET_KEY, algorithm=ALGORITHM)

def verify_access_token(token, err_msg):
    try:
        j = jwt.decode(token, SECRET_KEY, algorithms=ALGORITHM)
        user = {
            'username':j.get('sub'),
            'id':j.get('id')
        }

        return user
    except Exception:
        raise HTTPException(400, err_msg)

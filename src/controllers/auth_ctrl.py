from fastapi import APIRouter, HTTPException
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext
from datetime import timedelta, datetime
from bson.objectid import ObjectId
from ..models.auth_mdl import AuthRegister, AuthLogin
from ..schemas.auth_sch import individual_user, profile_serial
from ..utils.AuthJWT import create_access_token
from ..db.database import collection_profile, collection_users
from ..services.auth_servi import service_login, service_register

bcrypt_context = CryptContext(schemes=['bcrypt'])
oauth2_bearer = OAuth2PasswordBearer(tokenUrl='auth/login')

router = APIRouter(prefix='/auth')

@router.post('/register')
async def register(data_requets: AuthRegister):
    try:
        data = dict(data_requets)
        valid_e = collection_users.find_one({ 'email': data['email'] })
        if valid_e:
            raise HTTPException(401, 'DANGER_AUTH_REGISTER_EMAIL_REFUSED')
        
        valid_u = collection_users.find_one({ 'username':data['username'] })
        if valid_u:
            raise HTTPException(401, 'DANGER_AUTH_REGISTER_USERNAME_REFUSED')

        profile_result = collection_profile.insert_one({'photo_profile':'', 'country':'','city':''})

        insert_user = {
            "email": data['email'],
            "password": '',
            "username": data['username'],
            "profile_id": profile_result.inserted_id,
            "token": '',
            "date": datetime.now()
        }

        insert_user['password'] = bcrypt_context.hash(data['password']) 
        collection_users.insert_one(insert_user)

        return {'response':'SUCCESS_AUTH_REGISTER'}
          

    except Exception as e:
        raise HTTPException(400, 'DANGER_AUTH_REGISTER')

@router.post('/login')
async def login(data_requets: AuthLogin):
    try:
        data = dict(data_requets)
        user_result = individual_user(collection_users.find_one({ 'email': data['email'] }))

        # Verify user
        if not user_result:
            raise HTTPException(400, 'DANGER_AUTH_LOGIN_EMAIL')
        
        # Verify password
        if not bcrypt_context.verify(data['password'], user_result['password']):
            raise HTTPException(400, 'DANGER_AUTH_LOGIN_PASSWORD') 
        
        token = create_access_token(user_result['username'], user_result['id'], timedelta(minutes=60))
        profile = profile_serial(collection_profile.find_one({ '_id': ObjectId(user_result['profile_id']) }))

        return {
            'response':'SUCCESS_AUTH_LOGIN',
            'token_type':'bearer',
            'token': token,
            'body':{
                'user': user_result,
                'profile': profile
            }
        } 
    
    except Exception as e:
        print(e)
        raise HTTPException(400, 'DANGER_AUTH_LOGIN')


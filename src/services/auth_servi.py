from fastapi import HTTPException
from fastapi.security import OAuth2PasswordBearer
from passlib.context import CryptContext
from datetime import timedelta, datetime
from bson.objectid import ObjectId
from ..models.auth_mdl import AuthRegister, AuthLogin
from ..utils.AuthJWT import create_access_token
from ..db.database import collection_profile, collection_users
from ..schemas.auth_sch import individual_user, profile_serial

bcrypt_context = CryptContext(schemes=['bcrypt'])
bcrypt_context = CryptContext(schemes=['bcrypt'])
oauth2_bearer = OAuth2PasswordBearer(tokenUrl='auth/login')

async def service_register(data: AuthRegister):
    verify_email = collection_users.find_one({ 'email': data['email'] })
    if verify_email:
        raise HTTPException(401, 'DANGER_AUTH_REGISTER_EMAIL_REFUSED')

    verify_username = collection_users.find_one({ 'username': data['username'] })
    if verify_username:
        raise HTTPException(401, 'DANGER_AUTH_REGISTER_USERNAME_REFUSED')

    profile = {'photo_profile':'', 'country':'','city':''}
    profile_result = collection_profile.insert_one(profile)

    insert_user = {
        "email": data.email,
        "password": '',
        "username": data.username,
        "profile_id": profile_result.inserted_id,
        "token": '',
        "date": datetime.now()
    }

    insert_user['password'] = bcrypt_context.hash(data['password']) # hast password
    test_user = collection_users.insert_one(insert_user)
    print(dict(test_user))
    return True

async def service_login(data: AuthLogin): 
    print(data)
    user_result = individual_user(collection_users.find_one({ 'email': data['email'] }))

    print(2)
    # Verify user
    if not user_result:
        raise HTTPException(400, 'DANGER_AUTH_LOGIN_EMAIL')
    
    print(3)
    # Verify password
    if not bcrypt_context.verify(data['password'], user_result['password']):
        raise HTTPException(400, 'DANGER_AUTH_LOGIN_PASSWORD') 
    
    print(4)
    token = create_access_token(user_result['username'], user_result['id'], timedelta(minutes=60))
    profile = profile_serial(collection_profile.find_one({ '_id': ObjectId(user_result['profile_id']) }))

    print(5)
    return {
        'body':{
            'user': user_result,
            'profile': profile
        },
        'token': token
    }

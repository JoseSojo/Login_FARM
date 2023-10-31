from fastapi import APIRouter, Header, HTTPException, status
from typing import Annotated
from bson.objectid import ObjectId

from ..db.database import collection_profile, collection_users
from ..utils.AuthJWT import verify_access_token
from ..schemas.auth_sch import individual_user, profile_serial

router = APIRouter(prefix='/user')

@router.get('/profile')
async def get_user_by_id(token: Annotated[str | None, Header()] = None):
    
    if token == None:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, 'DANGER_USER_PROFILE')

    x = verify_access_token(token, 'DANGER_USER_PROFILE_JWT')
    
    

    return {'response':'SUCCESS_USER_PROFILE_VERIFY_LOGIN' }

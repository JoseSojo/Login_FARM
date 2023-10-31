from fastapi import APIRouter, Header, HTTPException, status
from bson.objectid import ObjectId

from ..db.database import collection_profile, collection_users
from ..utils.AuthJWT import verify_access_token
from ..schemas.auth_sch import individual_user, profile_serial

router = APIRouter(prefix='/user')

@router.get('/profile')
async def get_user_by_id():
    
    

    return {'response':'SUCCESS_USER_PROFILE_VERIFY_LOGIN' }

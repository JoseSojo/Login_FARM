from pydantic import BaseModel

class AuthRegister(BaseModel):
    username: str
    email: str
    password: str

class AuthLogin(BaseModel):
    email: str
    password: str

class AuthResetPassword(BaseModel):
    password: str
    email: str

class AuthResetEmail(BaseModel):
    private_key: str
    email: str

class AuthGenerateToken(BaseModel):
    email: str

"""
class UserSchema(BaseModel):
    email: str
    password: str
    username: str
    profile_id: str
    account_id: str
    keys_id: str
    create_date: str
    last_session: str

class ProfileSchema(BaseModel):
    photo_profile: str
    country: str
    city: str
    mapa_id: str

class MappSchema(BaseModel):
    active: bool
    longitud: str
    latitude: str

class KeySchema(BaseModel):
    api_key: str
    private_key: str
    public_key: str
    token: str
    active: bool

class AccounsSchema(BaseModel):
    active: bool
    date_active: str
    money: float
    number_account: str
    type: str
    all_ingrese_cuantity: float
    all_egrese_cuantity: float
    ingrese_register_list: []
    egrese_register_list: []

class MovimentSchema(BaseModel):
    money: float
    date: str
    account_ingrese: str
    account_egrese: str
"""
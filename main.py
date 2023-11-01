from fastapi import FastAPI
#from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from src.controllers import auth_ctrl, user_ctrl

app = FastAPI()

origins = ['http://localhost', 'http://localhost:5173']
app.add_middleware(
    CORSMiddleware,
    allow_origins = ['*'],
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*']
)

app.include_router(auth_ctrl.router)
app.include_router(user_ctrl.router)
#app.mount('/static', StaticFiles(directory='static'), name='static') # static files

from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

client = MongoClient(os.environ.get('URI'))

mydb = client['auth_simple']
collection_profile = mydb['profile']
collection_users = mydb['users']



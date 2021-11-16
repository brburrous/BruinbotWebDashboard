import google.cloud
import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("./key.json") #ENTER PATH LENGTH TO CREDENTIALS HERE
app = firebase_admin.initialize_app(cred)

store = firestore.Client('fair-myth-274206')
import google.cloud
import firebase_admin
from firebase_admin import credentials, firestore, initialize_app

cred = credentials.Certificate("key.json") #ENTER PATH LENGTH TO CREDENTIALS HERE
app = initialize_app(cred)
db = firestore.client()
testRef = db.collection('test')


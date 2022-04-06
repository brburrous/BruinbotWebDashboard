from flask import render_template, request, jsonify
from app import app
# from firebase_setup import testRef

from datetime import datetime



@app.route('/')
@app.route('/index')
def index():
    # return "<h1>Hello World</h1>"
    return render_template('main.html')

@app.route('/add', methods=['POST'])
# def create():
#     try:
#         id = request.json['id']
#         testRef.document(id).set(request.json)
#         return jsonify({"success": True}), 200
#     except Exception as e:
#         return f"An Error Occured: {e}"

@app.route('/stream', methods=['GET'])
def stream():
    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    return jsonify({"time":current_time})

@app.route('/test')
def test():
    return render_template("test.html")

@app.route('/logs')
def logs():
    print("Hello world")
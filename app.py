from flask import Flask, request, jsonify
from utils.keras_generator import generate_keras_code

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World! This is the Flask backend.'

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/generate_keras_code', methods=['POST'])
def generate_code():
    architecture = request.json
    keras_code = generate_keras_code(architecture)
    return jsonify({"keras_code": keras_code})
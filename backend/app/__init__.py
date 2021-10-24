from flask import Flask
from flask_cors import CORS

from .youtube import app_youtube

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

app.register_blueprint(app_youtube)


@app.route("/ping")
def ping():
    return "pong"

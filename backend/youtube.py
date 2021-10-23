from flask import Blueprint, request

from .client import youtube_client

app_youtube = Blueprint("youtube", __name__)


@app_youtube.route("/search", methods=["POST"])
def search():
    query = request.json["query"]
    results = youtube_client(query)
    return {"results": results}

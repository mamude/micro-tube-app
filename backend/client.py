from googleapiclient.discovery import build

from .config import Config


def youtube_client(query):
    service = build("youtube", "v3", developerKey=Config.GOOGLE_APPLICATION_CREDENTIALS)
    result = (
        service.search()
        .list(q=query, part="id,snippet", maxResults=Config.MAX_RESULTS)
        .execute()
    )
    return result

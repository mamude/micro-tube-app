from prettyconf import config


class Config(object):
    FLASK_ENV = config("FLASK_ENV", default="development")
    FLASK_APP = config("FLASK_APP", default="backend.app")
    GOOGLE_APPLICATION_CREDENTIALS = config(
        "GOOGLE_APPLICATION_CREDENTIALS", default=""
    )
    MAX_RESULTS = config("MAX_RESULTS", default=25)

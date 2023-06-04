from pydantic import BaseSettings

class Settings(BaseSettings):
    app_name: str = "Visie test"
    DATABASE_URL: str

    class Config:
        env_file = ".env"

settings = Settings()

from pydantic import BaseSettings

class Settings(BaseSettings):
    app_nome: str = "Visie test"
    DATABASE_URL: str

    class Config:
        env_file = ".env"

settings = Settings()

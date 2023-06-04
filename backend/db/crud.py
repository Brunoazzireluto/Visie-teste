from sqlalchemy.orm import Session
from models import model
from . import schema

def get_people(db: Session, skip: int = 0, limit: int = 100):
    return db.query(model.People).offset(skip).limit(limit).all()
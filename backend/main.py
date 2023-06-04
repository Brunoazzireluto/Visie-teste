from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from db import crud, schema
from models import model
from db.database import SessionLocal, engine

model.Base.metadata.create_all(bind=engine)

app = FastAPI()



def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/people/", response_model=list[schema.People])
def read_people(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    people = crud.get_people(db, skip=skip, limit=limit)
    return people
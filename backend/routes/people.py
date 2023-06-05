from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db import crud, schema
from models import model
from db.database import SessionLocal, engine

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

router = APIRouter(prefix="/people", tags=["People"])

@router.get("/", response_model=list[schema.People], 
    description="Consulta de todos os registro de pessoas no banco de dados")
def all_people(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    people = crud.get_people(db, skip=skip, limit=limit)
    return people

@router.get("/{id}", response_model=schema.People, 
    description="Consulta de apenas um registro com base no id")
def people_id(id:int, db: Session = Depends(get_db)):
    people = crud.get_people_id(db, id)
    return people


@router.post("/", response_model=schema.People, 
    description="Cadastro de um novo registro no banco de dados")
def create_people(people: schema.PeopleCreate, db: Session = Depends(get_db)):
    people_db = crud.get_people_by_cpf(db, cpf=people.cpf)
    print(people)
    if people_db:
        raise HTTPException(status_code=400, detail="Já Existe uma pessoa cadastrada com este cpf!")
    return crud.create_people(db, people=people)

@router.put("/{id}", response_model=schema.People, 
    description="Alterar dados de um registro no banco de dados")
def edit_people(id:int, people: schema.PeopleCreate, db: Session = Depends(get_db)):
    return crud.update_people(id=id, people=people, db=db )


@router.delete("/{id}", description="Exclusão de um registro específio no banco de dados")
def delete_people(id: int, db: Session = Depends(get_db)):
    return crud.delete_people(db, id)
   
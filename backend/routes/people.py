from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from db import crud, schema
from models import model
from db.database import SessionLocal, engine

#Rotas da API

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
async def create_people(request: Request, db: Session = Depends(get_db)):
    people = schema.PeopleCreate
    data = await request.json()
    people.nome = data["nome"]
    people.rg = data["rg"]
    people.cpf = data["cpf"]
    people.data_nascimento = data["data_nascimento"]
    people.data_admissao = data["data_admissao"]
    people.funcao = data["funcao"]
    people_db =  crud.get_people_by_cpf(db, cpf=people.cpf)
    if people_db:
        raise HTTPException(status_code=400, detail="Já Existe uma pessoa cadastrada com este cpf!")
    return  crud.create_people(db, people=people)

@router.put("/{id}", response_model=schema.People, 
    description="Alterar dados de um registro no banco de dados")
async def edit_people(id:int, request: Request, db: Session = Depends(get_db)):
    people = schema.PeopleCreate
    data = await request.json()
    people.nome = data["nome"]
    people.rg = data["rg"]
    people.cpf = data["cpf"]
    people.data_nascimento = data["data_nascimento"]
    people.data_admissao = data["data_admissao"]
    people.funcao = data["funcao"]
    return crud.update_people(id=id, people=people, db=db )


@router.delete("/{id}", description="Exclusão de um registro específio no banco de dados")
def delete_people(id: int, db: Session = Depends(get_db)):
    return crud.delete_people(db, id)
   
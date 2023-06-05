from fastapi import responses
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from models import model
from . import schema

def get_people(db: Session, skip: int = 0, limit: int = 100):
    return db.query(model.People).offset(skip).limit(limit).all()

def get_people_id(db:Session, id:int):
    people = db.query(model.People).filter(model.People.id_pessoa == id).first()
    if people: 
        return people
    return responses.JSONResponse({"Status code": 404, "Message": "Registro não existe no banco de dados"}) 

def get_people_by_cpf(db: Session, cpf: str):
    return db.query(model.People).filter(model.People.cpf == cpf).first()

def create_people(db: Session, people: schema.PeopleCreate):
    people_db = model.People(nome=people.nome, rg=people.rg, 
        cpf=people.cpf, data_nascimento=people.data_nascimento, 
        data_admissao=people.data_admissao, funcao=people.funcao)
    db.add(people_db)
    db.commit()
    db.refresh(people_db)
    return people_db

def update_people(db: Session, id: int,  people: schema.PeopleCreate):
    people_db = db.query(model.People).filter(model.People.id_pessoa == id).first()
    people_db.nome = people.nome
    people_db.rg = people.rg
    people_db.cpf = people.cpf
    people_db.data_nascimento = people.data_nascimento
    people_db.data_admissao = people.data_admissao
    people_db.funcao = people.funcao
    db.commit()
    db.refresh(people_db)
    return people_db

def delete_people(db:Session, id:int):
    people = db.query(model.People).filter(model.People.id_pessoa == id).first()
    db.delete(people)
    db.commit()
    return responses.JSONResponse({"Message": "Registro deletado no banco de dados"})
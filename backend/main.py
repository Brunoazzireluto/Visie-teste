from fastapi import FastAPI
from routes import people
from models import model
from db.database import SessionLocal, engine

model.Base.metadata.create_all(bind=engine)

description = """
Um CRUD simples de operações numa base de dados de pessoas, feito para o teste da Empresa Visie Padrões Web

## Pessoas

Responsáveis por todas as operaçoes de CRUD

* **Cadastrar uma pessoa**
* **Consultar todas  as pessoas**
* **Consultar uma pessoa pelo nome ou CPF**
* **Editar uma pessoa**
* **Excluir uma pessoa**

"""

app = FastAPI(title="Teste Visie", 
description=description)



app.include_router(people.router)


from pydantic import BaseModel
from datetime import date


class PeopleBase(BaseModel):
    nome: str
    rg: str
    cpf:str
    data_nascimento: date
    data_admissao: date
    funcao: str | None = None

class PeopleCreate(PeopleBase):
    pass

class People(PeopleBase):
    id_pessoa: int

    class Config:
        orm_mode = True
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

    class Config:
        orm_mode = True

class People(PeopleBase):
    id_pessoa: int
    funcao: str | None = None


    class Config:
        orm_mode = True
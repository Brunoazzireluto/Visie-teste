from sqlalchemy import Column, String, Integer, Date
from db.database import Base

class People(Base):
    __tablename__ = "Pessoas"
    id_pessoa = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), index=True, nullable=False)
    rg = Column(String(100), index=True, nullable=False)
    cpf = Column(String(100), index=True, nullable=False) 
    data_nascimento = Column(Date, nullable=False)
    data_admissao = Column(Date, nullable=False)
    funcao = Column(String(100), index=True, nullable=True) 

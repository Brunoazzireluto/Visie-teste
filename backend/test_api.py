from fastapi.testclient import TestClient
from db.database import SessionLocal
from models import model
from .main import app

def test_get_all():
    with TestClient(app) as client:
        response = client.get('people/')
        assert response.status_code == 200, response.text
        data = response.json()
        assert len(data) > 20

def test_get_one():
    with TestClient(app) as client:
        response = client.get('people/1')
        assert response.status_code == 200, response.text
        data = response.json()
        assert data["nome"] == "Alberto Vieira"

def test_create():
    with TestClient(app) as client:
        response = client.post('people/', json= {
            "nome": "testnome",
            "rg": "testrg",
            "cpf": "testcpf",
            "data_nascimento": "2023-06-05",
            "data_admissao": "2023-06-05",
            "funcao": "testefunção"
        })
        assert response.status_code == 200, response.text
        data = response.json()
        assert data["nome"] == "testnome"


def test_delete():
    with TestClient(app) as client:
        db = SessionLocal()
        last = db.query(model.People).order_by(model.People.id_pessoa.desc()).first()
        response = client.delete('people/'+str(last.id_pessoa))
        assert response.status_code == 200, response.text
        assert response.json() == {"Message": "Registro deletado no banco de dados"}


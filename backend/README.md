## Teste Visio - Fullstack 

<br/>

### backend

Trata-se de uma api simples contendo um crud para consulta, edição, exclusão e adicão de pessoas num banco de dados Mysql

### 🔧 Instalação

Para fazer a instalação do requirements é necessario primeiramente criar um ambiente virtual para podermos utilizar o app.

**Linux**
Ir até a pasta do projeto:
```
cd backend\
```
instalação do virtualenv:
```
sudo apt-get install python3-venv
```
criando o ambiente virtual:
```
python3 -m venv nome_do_ambiente
```
para ativar o ambiente virtual :
```
source nome_do_ambiente/bin/activate
```
Com o ambiente devidamente ativado instalamos os requerimentos com o seguinte código:
```
pip install -r requirements.txt
```
Após isso para colocarmos a aplição para rodar com o comando 
```
uvicorn main:app  --reload
```
# Trabalho-BackEnd-Crud

API Escolar – Gestão Acadêmica

O intuito da nossa aplicação é desenvolver o BackEnd para uma rede escolar, com CRUDs necessários para cadastro e administração da instituição.

API REST desenvolvida em Node.js + Express, com 5 CRUDs completos: Alunos, Professores, Turmas, Disciplinas e Notas.
Os dados são armazenados em memória (arrays) e manipulados via rotas seguindo as convenções REST.


Instalação e Execução

1- instalção e dependências 
npm init -y = criação da apliacação
npm install express cors = instalação das dependências express e cors
npm install --save-dev nodemon jest supertest = instalação para atualização em tempo real do servidor em caso de mudanças na aplicação

2-Clone o repositório
git clone https://github.com/AlanVinicius357/Trabalho-BackEnd-Crud.git

3-Execute a aplicação
npm start - configurado no package.json "nodemon index.js"

4-Acesso a API
http://localhost:3000



Endpoints

-----Alunos (/alunos)------

GET /alunos → lista todos os alunos

GET /alunos/:id → retorna um aluno pelo ID

POST /alunos → criação novo aluno
Exemplo body:
{
        id: 1, 
        nome: 'Wendel Ferreira Santos', 
        matricula: 2142948, 
        idade: 20, 
        turma:'3A',
    },

PUT /alunos/:id → atualiza aluno

DELETE /alunos/:id → remove aluno



------Professores (/professores)------

GET /professores - listar professores

GET /professores/:id - listar professor pelo id

POST /professores - criar cadastro novo professor
Ex:
 {
        id: 2, 
        nome: 'João da silva', 
        disciplina: 'Portugues', 
        email: 'Joao@gmail.com',
        telefone: 61988888888,
    },

PUT /professores/:id - atualizar cadastro professor

DELETE /professores/:id - deletar cadastro



------Turmas (/turmas)------

GET /turmas - listar turmas 

GET /turmas/:id - listar turma pelo id

POST /turmas - criar nova turma
Ex: 
{
  "nome": "1ºB",
  "turno": "Manhã",
  "anoLetivo": 2025
}

PUT /turmas/:id - atualizar turma através do id

DELETE /turmas/:id - deletar turma através do id



------Disciplinas (/disciplinas)------

GET /disciplinas - listar disciplinas

GET /disciplinas/:id - listar disciplina id

POST /disciplinas - criar nova disciplina
Ex:
{
    "id":1
  "nome": "Matemática",
  "cargaHoraria": "120",
  "professorId": 1
}

PUT /disciplinas/:id - atualizar disciplina id

DELETE /disciplinas/:id - deletar disciplina id


------Notas (/notas)------

GET /notas - listar notas

GET /notas/:id - listar nota id

POST /notas - criar nova nota
Ex:
{
  "alunoId": 1,
  "disciplinaId": 2,
  "nota": 8.5
}
PUT /notas/:id - atualizar nota id

DELETE /notas/:id - deletar nota id



Integrantes do Grupo

Alan Vinicius – AlanVinicius357

➝ Criação e configuração do repositório da aplicação.
➝ Implementação do CRUD Turmas.
➝ Documentação do README.


Luan Barbosa - luanbsantana

➝ Instalação da aplicação junto as dependências.
➝ Implementação do CRUD Disciplina.
➝ Integração no index.js.


Wendel Ferreira – Wendels1

➝ Implementação dos CRUDs Alunos e Professores.
➝ Responsável pela Collection do Postman ao repositório Git.


Arthur Barbosa – arthurgbabarbosa-png

➝ Implementação do CRUD notas.
➝ Auxilio na Collection do Postman.


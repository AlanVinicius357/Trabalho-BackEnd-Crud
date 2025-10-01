# Trabalho-BackEnd-Crud
Trabalho-Backend-Crud
testando comit


1. Alunos

Campos sugeridos:

id (numérico, auto-incremento ou gerado)

nome (string, obrigatório)

matricula (string ou número único)

idade (number)

turmaId (referência à turma que pertence)

👉 Rotas possíveis:

GET /alunos → listar todos

GET /alunos/:id → buscar por id

POST /alunos → criar aluno

PUT /alunos/:id → atualizar aluno

DELETE /alunos/:id → excluir aluno

🔹 2. Professores

Campos sugeridos:

id

nome

disciplina (string)

email

telefone

👉 Rotas CRUD iguais às de alunos, mas aplicadas a professores.

🔹 3. Turmas

Campos sugeridos:

id

nome (ex: "3º Ano A")

turno (manhã, tarde, noite)

anoLetivo

👉 Rotas:

GET /turmas

POST /turmas

etc.

🔹 4. Disciplinas

Campos sugeridos:

id

nome (ex: Matemática, História)

cargaHoraria (número em horas)

professorId (referência ao professor responsável)

🔹 5. Notas

Campos sugeridos:

id

alunoId (referência ao aluno)

disciplinaId (referência à disciplina)

nota (número 0–10)

bimestre (1, 2, 3, 4)
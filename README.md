# Trabalho-BackEnd-Crud

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

const express = require('express');
const router = express.Router();

let turmas = [];
let nextId = 1;

router.get('/', (req, res) => res.json(turmas));

router.get('/:id', (req, res) => {
  const turma = turmas.find(t => t.id === parseInt(req.params.id));
  if (!turma) return res.status(404).json({ erro: "Turma não encontrada" });
  res.json(turma);
});

router.post('/', (req, res) => {
  const { nome, turno, anoLetivo } = req.body;
  if (!nome || !anoLetivo) {
    return res.status(400).json({ erro: "Nome e ano letivo são obrigatórios" });
  }
  const novaTurma = { id: nextId++, nome, turno, anoLetivo };
  turmas.push(novaTurma);
  res.status(201).json(novaTurma);
});

router.put('/:id', (req, res) => {
  const turma = turmas.find(t => t.id === parseInt(req.params.id));
  if (!turma) return res.status(404).json({ erro: "Turma não encontrada" });

  const { nome, turno, anoLetivo } = req.body;
  if (!nome || !anoLetivo) {
    return res.status(400).json({ erro: "Nome e ano letivo são obrigatórios" });
  }
  turma.nome = nome;
  turma.turno = turno;
  turma.anoLetivo = anoLetivo;

  res.json(turma);
});

router.delete('/:id', (req, res) => {
  const index = turmas.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ erro: "Turma não encontrada" });
  turmas.splice(index, 1);
  res.json({ mensagem: "Turma removida com sucesso" });
});

module.exports = router;




//turmas: id, nome da turma, turno e ano letivo

const express = require('express');
const router = express.Router();

// Dados iniciais de exemplo
let turmas = [
  { id: 1, nome: "1ºA", turno: "Manhã", anoLetivo: 2025 },
  { id: 2, nome: "2ºA", turno: "Tarde", anoLetivo: 2025 }
];
let nextId = 3;

// Listar todas as turmas
router.get('/', (req, res, next) => {
  res.json(turmas);
});

// Buscar turma por ID
router.get('/:id', (req, res, next) => {
  const turma = turmas.find(t => t.id === parseInt(req.params.id));
  if (!turma)
  return res.status(404).json({ erro: "Turma não encontrada" });

  res.json(turma);
});

// Criar nova turma
router.post('/', (req, res, next) => {
  const { nome, turno, anoLetivo } = req.body;
  if (!nome || !anoLetivo) {
    return res.status(400).json({ erro: "Nome e ano letivo são obrigatórios" });
  }

  const novaTurma = { id: nextId++, nome, turno, anoLetivo };
  turmas.push(novaTurma);
  res.status(201).json(novaTurma);
});

// Atualizar turma existente
router.put('/:id', (req, res, next) => {
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

// Deletar turma
router.delete('/:id', (req, res, next) => {
  const index = turmas.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) 
  return res.status(404).json({ erro: "Turma não encontrada" });

  turmas.splice(index, 1);
  res.json({ mensagem: "Turma removida com sucesso" });
});

module.exports = router;

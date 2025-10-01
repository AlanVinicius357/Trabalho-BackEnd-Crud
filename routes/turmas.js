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

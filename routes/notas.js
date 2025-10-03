const express = require('express');
const router = express.Router();

// Dados iniciais de exemplo (lançamentos de notas)
let lancamentosDeNotas = [
    { id: 1, alunoId: 101, disciplinaId: 201, nota: 8.5, bimestre: 1 },
    { id: 2, alunoId: 102, disciplinaId: 202, nota: 7.0, bimestre: 1 },
    { id: 3, alunoId: 101, disciplinaId: 202, nota: 9.2, bimestre: 2 }
];
let nextId = 4; // Próximo ID a ser usado

// ------------------------------------------
// # Busca de Todos os Lançamentos
// GET /
router.get('/', (req, res, next) => {
    res.json(lancamentosDeNotas);
});

// ------------------------------------------
// # Buscar Lançamento por ID
// GET /:id
router.get('/:id', (req, res, next) => {
    const lancamento = lancamentosDeNotas.find(n => n.id === parseInt(req.params.id));

    if (!lancamento)
        return res.status(404).json({ erro: "Lançamento de nota não encontrado" });

    res.json(lancamento);
});

// ------------------------------------------
// # Criar Novo Lançamento de Nota
// POST /
router.post('/', (req, res, next) => {
    const { alunoId, disciplinaId, nota, bimestre } = req.body;

    // alunoId, disciplinaId, nota, e bimestre são obrigatórios
    if (alunoId === undefined || disciplinaId === undefined || nota === undefined || bimestre === undefined) {
        return res.status(400).json({ erro: "alunoId, disciplinaId, nota e bimestre são obrigatórios" });
    }

    const novoLancamento = { id: nextId++, alunoId, disciplinaId, nota, bimestre };
    lancamentosDeNotas.push(novoLancamento);

    // Retorna o status 201 (Created) e o novo recurso
    res.status(201).json(novoLancamento);
});

// ------------------------------------------
// # Atualizar Lançamento de Nota Existente
// PUT /:id
router.put('/:id', (req, res, next) => {
    const lancamento = lancamentosDeNotas.find(n => n.id === parseInt(req.params.id));

    if (!lancamento) return res.status(404).json({ erro: "Lançamento de nota não encontrado" });

    const { alunoId, disciplinaId, nota, bimestre } = req.body;

    // Validação dos campos obrigatórios
    if (alunoId === undefined || disciplinaId === undefined || nota === undefined || bimestre === undefined) {
        return res.status(400).json({ erro: "alunoId, disciplinaId, nota e bimestre são obrigatórios" });
    }

    // Atualiza os dados
    lancamento.alunoId = alunoId;
    lancamento.disciplinaId = disciplinaId;
    lancamento.nota = nota;
    lancamento.bimestre = bimestre;

    res.json(lancamento);
});

// ------------------------------------------
// # Deletar Lançamento de Nota
// DELETE /:id
router.delete('/:id', (req, res, next) => {
    const index = lancamentosDeNotas.findIndex(n => n.id === parseInt(req.params.id));

    if (index === -1)
        return res.status(404).json({ erro: "Lançamento de nota não encontrado" });

    lancamentosDeNotas.splice(index, 1);

    res.json({ mensagem: "Lançamento de nota removido com sucesso" });
});

// exportar o roteador
module.exports = router;
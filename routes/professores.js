const express = require('express');
const router = express.Router();

let listaProfessores = [
    {
        id: 1, 
        nome: 'Wendel Ferreira Santos', 
        disciplina: 'Matematica', 
        email: 'wendel@gmail.com', 
        telefone: 61999999999, 
    },

    {
        id: 2, 
        nome: 'João da silva', 
        disciplina: 'Portugues', 
        email: 'Joao@gmail.com',
        telefone: 61988888888,
    },
    {
        id: 3, 
        nome: 'Maria de Souza', 
        disciplina: 'Historia', 
        email: 'maria@gmail.com', 
        telefone: 61977777777,
    },
]

// #Lista todos os alunos
router.get('/professores', (req, res, next) => {
    res.json(listaProfessores);
});

// #Busca por id
router.get('/professores/:id', (req, res, next) => {
    const id = req.params.id;

    const professor = listaProfessores.find(professor => professor.id == id);
    if(!professor){
        return res.status(404).json({error: 'Professor não encontrado'});
    }
    res.json(professor);
});

// Criação de um novo aluno
router.post('/professores', (req, res, next) => {
    const {nome,disciplina,email,telefone} = req.body;
    // Validação dos dados
   if(!nome || !disciplina || !email || !telefone){
        return res.status(400).json({error: 'Dados incompletos'});
    }

    // Verifica se a matrícula já existe
   if(listaProfessores.some(professor => professor.email === email)){
        return res.status(409).json({error: 'Email já existe'});
    }

    const novoProfessor = {
        id: listaProfessores.length + 1,
        nome,
        disciplina,
        email,
        telefone,
    };

    listaProfessores.push(novoProfessor);
    res.status(201).json(novoProfessor);
});

// Atualização de um aluno existente
router.put('/professores/:id', (req, res, next) => {
    const id = req.params.id;
    const professor = listaProfessores.find(professor => professor.id == id);

    if(!professor){
        return res.status(404).json({error: 'Professor não encontrado'});
    }

    const { nome, disciplina, email, telefone } = req.body;
    if(!nome || !disciplina || !email || !telefone){
        return res.status(400).json({error: 'Dados incompletos'});
    }

    // atualiza os dados do professor
    professor.nome = nome;
    professor.disciplina = disciplina;
    professor.email = email;
    professor.telefone = telefone;
    
    res.json(professor);
})

// Remoção de um aluno
router.delete('/professores/:id', (req, res, next) => {
    const id = req.params.id;

    const professor = listaProfessores.find(professor => professor.id == id);
    if(!professor){
        return res.status(404).json({error: 'Professor não encontrado'});
    }

    listaProfessores = listaProfessores.filter(professor => professor.id != id);
    res.json({message: 'Professor removido com sucesso'});
})

module.exports = router
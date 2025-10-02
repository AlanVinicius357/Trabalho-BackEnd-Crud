const express = require('express');
const router = express.Router();

let listaAlunos = [
    {
        id: 1, 
        nome: 'Wendel Ferreira Santos', 
        matricula: 2142948, 
        idade: 20, 
        turma:'3A',
    },

    {
        id: 2, 
        nome: 'Maria antonia da silva', 
        matricula: 2142949, 
        idade: 22, 
        turma:'3B',
    },
    {
        id: 3, 
        nome: 'João Pedro de Souza', 
        matricula: 2142950, 
        idade: 19, 
        turma:'3C',
    },
]

router.get('/alunos', (req, res, next) => {
    res.json(listaAlunos);
});
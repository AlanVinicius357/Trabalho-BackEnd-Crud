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

router.get('/alunos/id', (req, res, next) => {
    const id = req.params.id;

    const aluno = listaAlunos.find(aluno => aluno.id == id);
    if(!aluno){
        return res.status(404).json({error: 'Aluno não encontrado'});
    }
    res.json(aluno);
});

// Criação de um novo aluno
router.post('/alunos'), (req, res, next) => {
    const { nome, matricula, idade, turma  } = req.body;

    if(!nome || !matricula || !idade || !turma){
        return res.status(400).json({error: 'Dados incompletos'});
    }

    if(listaAlunos.some(aluno => aluno.matricula === matricula)){
        return res.status(409).json({error: 'Matrícula já existe'});
    }

    const novoAluno = {
        id: listaAlunos.length + 1,
        nome,
        matricula,
        idade,
        turma,
    };

    listaAlunos.push(novoAluno);
    res.status(201).json({message: "Aluno cadastrado com sucesso"},novoAluno);
}


module.exports = router;
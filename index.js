//importar o express
const express = require('express')
//cors
const cors = require('cors')
//instancia express
const app = express()

//middlewares (intermediarios)
//habilitar cors
app.use(cors())
//habilitar receber json
app.use(express.json())

//roteadores 

CrudAlunos/Professores

const professoresRouter = require('./routes/professores');
app.use('/professores', professoresRouter);
main

const alunosRouter = require('./routes/alunos');
app.use('/alunos', alunosRouter);

CrudAlunos/Professores




const turmasRouter = require('./routes/turmas');
app.use('/turmas', turmasRouter);

const disciplinasRouter = require('./routes/disciplinas');
app.use('/disciplinas', disciplinasRouter);
main

const notasRouter = require('./routes/notas');
app.use('/notas', notasRouter);



//executar a aplicação

app.listen(3000, () => {
    console.log("Apliacação rodando em http://localhost:3000")
})
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

const professoresRouter = require('./routes/professores')
app.use(professoresRouter)

const alunosRouter = require('./routes/alunos')
app.use(alunosRouter)

const turmasRouter = require('./routes/turmas')
app.use(turmasRouter)

const disciplinasRouter = require('./routes/disciplinas')
app.use(disciplinasRouter)

const notasRouter = require('./routes/notas')
app.use(notasRouter)




//executar a aplicação

app.listen(3000, () => {
    console.log("Apliacação rodando em http://localhost:3000")
})
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


const alunosRouter = require('./routes/alunos')
app.use(alunosRouter)








//executar a aplicação

app.listen(3000, () => {
    console.log("Apliacação rodando em http://localhost:3000")
})
/*
 4. Disciplinas

id
nome 
cargaHoraria 
professorId 
*/

const express = require('express')
const router = express.Router()

let disciplinas = {
 id: 1,
 nome: 'Matemática',
 cargaHoraria: '120',
 professorId: '1'   

}

router.get('/disciplina', (req, res, next)=>{
    res.json(disciplinas)
})
router.get('/disciplina/:id',(req,res,next)=>{
    const id = req.params.id
    const disciplina = disciplinas.find(disciplina => disciplina.id == id)

    if(!diciplina){
        return res.status(404).json({erro: 'Disciplina não encontrada'})
    }
    res.json(disciplina)
})
router.post('disciplina', (req, res,next)=>{
    const{nome, cargaHoraria, professorId} = req.body
    if(!nome || !cargaHoraria || !professorId ){
        return res.status(400).json({error: "Todos os campos são obrigátorios"})
    }
const cadastrarDisciplina = {
    id: Date.now(),
    nome,
    cargaHoraria,
    professorId
}
disciplinas.push(cadastrarDisciplina)
res.status(201).json({message: "Disciplina cadastrada com sucesso"}, cadastrarDisciplina)
})
router.put('/disciplina/:id', (req,res,next) =>{
    const id = req.params.id
    const disciplina = disciplinas.find(disciplina => disciplina.id == id)

    if(!disciplina){
        return res.status(404).json({error: "Disciplina não encontrada"})
    }

    const {nome, cargaHoraria, professorId} = req.body
    if(!nome || !cargaHoraria || !professorId){
        return res.status(400).json({erro: "Todos os campos são obrigatórios"})
    }
    disciplina.nome = nome
    disciplina.cargaHoraria = cargaHoraria
    disciplina.professorId = professorId

    res.json({message: "Disciplina cadastrada com sucesso!!!"}, disciplina)

})
router.delete('/disciplina/:id', (req, res, next) => {
    const id = req.params.id

    const disciplina = disciplinas.find(diciplina => diciplina.id == id)
    if (!disciplina) {
      return res.status(404).json({ error: "Diciplina não encontrada!!!"})
    }
  
    disciplinas = disciplinas.filter(disciplina => disciplina.id != id)
    res.json({ message: "Diciplina deletada com sucesso!!!"})
  })
  
  
  // exportar o roteador
  module.exports = router
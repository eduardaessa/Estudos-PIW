let Matricula = require('../models/matriculas.js');

module.exports.inserirMatricula = function(req, res){
    let promise = Matricula.create(req.body);
    promise.then(
        (aluno) =>{
            res.status(201).json(contato);
        }
    ).catch(
        (erro)=>{
            res.status(500).json(erro);
        }
 );
 }
 

module.exports.listarDisciplinas = function(req,res){
   let promise = Disciplina.find().exec();
   promise.then(
       function(disciplinas){
           res.json(disciplinas)
       }
   ).catch(
       function(error){
           res.status(500).json(error);
       }
);
}

module.exports.acharDisciplina = function(req,res){
    let promise = Disciplina.findById(req.params.id).exec();
    console.log(req.params.id)
    promise.then(
        function(disciplina){
            res.json(disciplina)
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
 );
 }


module.exports.deletarDisciplina = function(req, res){
    let promise = Disciplina.findByIdAndDelete(req.params.id).exec();
   promise.then(
       function(disciplina){
           res.json(disciplina)
       }
   ).catch(
       function(error){
           res.status(500).json(error);
       }
    );
};

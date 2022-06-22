let Matricula = require('../models/matriculas.js');
let view = require('../views/matriculas.js')


module.exports.inserirMatricula = function(req, res){
    let promise = Matricula.create(req.body);
    promise.then(
        (matricula) =>{
            res.status(201).json(view.render(matricula));
        }
    ).catch(
        (erro)=>{
            res.status(500).json(erro);
        }
 );
 }
 

module.exports.listarMatriculas = function(req,res){
   let promise = Matricula.find().exec();
   promise.then(
       function(matriculas){
           res.json(view.renderMany(matriculas))
       }
   ).catch(
       function(error){
           res.status(500).json(error);
       }
);
}

module.exports.buscarMatriculaPorId = function(req,res){
    let id = req.params.id;
    let promise = Matricula.findById(id).exec();
    console.log(req.params.id)
    promise.then(
        function(matricula){
            res.json(view.render(matricula))
        }
    ).catch(
        function(error){
            res.status(500).json(error);
        }
 );
 }


module.exports.deletarMatricula = function(req, res){
    let id = req.params.id;
    let promise = Matricula.findByIdAndDelete(id).exec();
   promise.then(
       function(matricula){
           res.json(view.render(matricula))
       }
   ).catch(
       function(error){
           res.status(500).json(error);
       }
    );
};

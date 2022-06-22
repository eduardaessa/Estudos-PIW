let Aluno = require('../models/alunos.js');
const view = require('../views/alunos.js');

module.exports.inserirAluno = function(req, res){
    let promise = Aluno.create(req.body)
    promise.then(
        function(aluno){
            res.status(201).json(view.render(aluno));
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

module.exports.listarAlunos = function(req,res){
   let promise = Aluno.find().exec();
   promise.then(
       function(alunos){
           res.json(view.renderMany(alunos))
       }
   ).catch(
       function(error){
           res.status(500).json(error);
       }
);
}

module.exports.buscarAlunoPorId = function(req,res){
    let id = req.params.id;
    let promise = Aluno.findById(id).exec();
    promise.then(
        function(aluno){
            res.status(200).json(view.render(aluno))
        }
    ).catch(
        function(error){
            res.status(400).json({mensagem:"Não funfou", error:error});
        }
 );
 }


module.exports.deletarAluno = function(req, res){
    let id = req.params.id;
    let promise = Aluno.findByIdAndDelete(id).exec();
   promise.then(
       function(aluno){
           res.json(view.render(aluno))
       }
   ).catch(
       function(error){
           res.status(500).json({mensagem: "Deu erro", error:error});
       }
    );
};

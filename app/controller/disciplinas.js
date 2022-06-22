let Disciplina = require("../models/disciplinas.js");
const view = require('../views/disciplinas.js');


module.exports.inserirDisciplina = function (req, res) {
  let promise = Disciplina.create(req.body);
  promise
    .then(function (disciplina) {
      res.status(201).json(view.render(disciplina));
    })
    .catch(function (erro) {
      res.status(500).json(erro);
    });
};

module.exports.listarDisciplinas = function (req, res) {
  let promise = Disciplina.find().exec();
  promise
    .then(function (disciplinas) {
      res.json(view.renderMany(disciplinas));
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};

module.exports.buscarDisciplinaPorId = function (req, res) {
    let id = req.params.id;
  let promise = Disciplina.findById(id).exec();
  console.log(req.params.id);
  promise
    .then(function (disciplina) {
      res.json(view.render(disciplina));
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};

module.exports.deletarDisciplina = function (req, res) {
    let id = req.params.id;
  let promise = Disciplina.findByIdAndDelete(id).exec();
  promise
    .then(function (disciplina) {
      res.json(disciplina);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};

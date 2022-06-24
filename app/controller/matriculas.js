let Matricula = require("../models/matriculas.js");
let view = require("../views/matriculas.js");
const jwt = require("jsonwebtoken");

module.exports.inserirMatricula = function (req, res) {
  let matricula = req.body;
  let id_disciplina = req.body.disciplina;
  let token = req.headers.token;
  let payload = jwt.decode(token);
  let id_aluno_logado = payload.id;

  let promise = Matricula.create({
    disciplina: id_disciplina,
    aluno: id_aluno_logado,
  });
  promise
    .then((matricula) => {
      res.status(201).json(view.render(matricula));
    })
    .catch((erro) => {
      res.status(500).json(erro);
    });
};

module.exports.listarMatriculas = function (req, res) {
  let token = req.headers.token;
  let payload = jwt.decode(token);
  let id_aluno_logado = payload.id;

  let promise = Matricula.find({aluno: id_aluno_logado})
    .populate("disciplina")
    .populate("aluno")
    .exec();
  promise
    .then(function (matriculas) {
      res.json(view.renderMany(matriculas));
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};

module.exports.buscarMatriculaPorId = function (req, res) {
  let id = req.params.id;
  let promise = Matricula.findById(id).exec();
  console.log(req.params.id);
  promise
    .then(function (matricula) {
      res.json(view.render(matricula));
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};

module.exports.deletarMatricula = function (req, res) {
  let id = req.params.id;
  let promise = Matricula.findByIdAndDelete(id).exec();
  promise
    .then(function (matricula) {
      res.json(view.render(matricula));
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
};

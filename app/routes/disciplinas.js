const controller = require("../controller/disciplinas.js");

module.exports = function(app) {
    app.get("/alunos", controller.listarDisciplinas),
    app.delete("/alunos/:id", controller.deletarDisciplina),
    app.post("/alunos", controller.inserirDisciplina),
    app.get("/alunos/:id", controller.acharDisciplina)
}
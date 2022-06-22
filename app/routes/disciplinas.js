const controller = require("../controller/disciplinas.js");

module.exports = function(app) {
    app.get("/disciplinas", controller.listarDisciplinas),
    app.delete("/disciplinas/:id", controller.deletarDisciplina),
    app.post("/disciplinas", controller.inserirDisciplina),
    app.get("/disciplinas/:id", controller.acharDisciplina)
}
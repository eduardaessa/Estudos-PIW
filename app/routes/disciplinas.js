const controller = require("../controller/disciplinas.js");
const controllerAuth = require("../controller/auth.js");

module.exports = function(app) {

    app.use("/disciplinas", controllerAuth.checar),
    app.get("/disciplinas", controller.listarDisciplinas),
    app.delete("/disciplinas/:id", controller.deletarDisciplina),
    app.post("/disciplinas", controller.inserirDisciplina),
    app.get("/disciplinas/:id", controller.buscarDisciplinaPorId)
}
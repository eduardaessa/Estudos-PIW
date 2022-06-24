const controller = require("../controller/alunos.js");
const controllerAuth = require('../controller/auth.js')


module.exports = function(app) {
    app.post("/alunos/signin", controllerAuth.logar),
    app.get("/alunos", controller.listarAlunos),
    app.get("/alunos/:id/matriculas", controller.obterMatriculas),
    app.get("/alunos/:id/disciplinas", controller.obterDisciplinas),
    app.delete("/alunos/:id", controller.deletarAluno),
    app.post("/alunos", controller.inserirAluno),
    app.get("/alunos/:id", controller.buscarAlunoPorId)
}
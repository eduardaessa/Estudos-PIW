const controller = require("../controller/alunos.js");

module.exports = function(app) {
    app.get("/alunos", controller.listarAlunos),
    app.get("/alunos/:id/matriculas", controller.obterMatriculas),
    app.get("/alunos/:id/disciplinas", controller.obterDisciplinas),
    app.delete("/alunos/:id", controller.deletarAluno),
    app.post("/alunos", controller.inserirAluno),
    app.get("/alunos/:id", controller.buscarAlunoPorId)
}
const controller = require("../controller/matriculas.js");

module.exports = function(app) {
    app.get("/matriculas", controller.listarMatriculas),
    app.delete("/matriculas/:id", controller.deletarMatricula),
    app.post("/matriculas", controller.inserirMatricula),
    app.get("/matriculas/:id", controller.buscarMatriculaPorId)
}
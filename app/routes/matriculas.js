const controller = require("../controller/matriculas.js");
const controllerAuth = require("../controller/auth.js");

module.exports = function(app) {

    app.use("/matriculas", controllerAuth.checar),
    app.get("/matriculas", controller.listarMatriculas),
    app.delete("/matriculas/:id", controller.deletarMatricula),
    app.post("/matriculas", controller.inserirMatricula),
    app.get("/matriculas/:id", controller.buscarMatriculaPorId)
}
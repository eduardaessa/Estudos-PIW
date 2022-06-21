const express = require("express");
const routerAluno = require("../app/routes/alunos");
const bodyParser = require("body-parser");
const db = require('../config/database.js');

module.exports = function() {
    let app = express();
    app.set("port", 3000);
    app.use(express.static("./public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    routerAluno(app);
    return app;
};

db('mongodb://localhost/sistemamatricula');
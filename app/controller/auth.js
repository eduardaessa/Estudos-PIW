const bcrypt = require('bcrypt');
const Aluno = require('../models/alunos.js');
const jwt = require('jsonwebtoken');

module.exports.logar = function(req,res){
    Aluno.findOne({matricula: req.body.matricula})
        .then(function(aluno){
            if(bcrypt.compareSync(req.body.senha, aluno.senha)){
                let token = jwt.sign({id: aluno._id}, "senha_secreta");
                console.log(token);
                res.status(200).json({token:token})
            }else{
                res.status(401).send("Credenciais estão erradas!")
            }
        }).catch(function(error){
            res.status(401).send('Invalid login');
        })
}

module.exports.checar = function(req, res, next){
    let token = req.headers.token;
    jwt.verify(token, "senha_secreta", function(err, decoded){
        if(err){
            res.status(401).send("Token inválido!");
        } else {
            next();
        }
    })
}
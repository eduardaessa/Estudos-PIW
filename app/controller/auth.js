const bcrypt = require('bcrypt');
const Aluno = require('../models/alunos.js');

module.exports.logar = function(req,res){
   function logar(user){
       if(!bcrypt.compareSync(req.body.senha, user.senha)){
           falhar();           
       }else{
           res.status(200).send("Credenciais estão OK!")
       }
   }
   function falhar(){
       res.status(401).send('Invalid login');
   }
   Aluno.findOne({matricula:req.body.matricula}).exec().then(logar,falhar);
}
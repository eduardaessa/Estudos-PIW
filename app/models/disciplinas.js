// app/models/disciplinas.js
let mongoose = require('mongoose');

module.exports = function(){
   let schema = mongoose.Schema({
       nome: {
           type:String,
           required: true
       },
       curso: {
           type: String,
           required: true
       },
       _id: {
        type: Number,
        required: true
    },
   });
   return mongoose.model('Disciplina', schema);
}();

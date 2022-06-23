const viewAluno = require('../views/alunos.js');
const viewDisciplinas = require('../views/disciplinas.js');

function render(matricula){
    return {
        id: matricula._id,
        aluno: viewAluno.render(matricula.aluno),
        disciplina: viewDisciplinas.render(matricula.disciplina),
    }
}

module.exports.render = render;

function renderMany(matriculas){
    return matriculas.map(render)
}

module.exports.renderMany = renderMany;
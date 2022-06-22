function render(matricula){
    return {
        id: matricula._id,
        aluno: matricula.aluno,
        disciplina: matricula.disciplina,
    }
}

module.exports.render = render;

function renderMany(matriculas){
    return matriculas.map(render)
}

module.exports.renderMany = renderMany;
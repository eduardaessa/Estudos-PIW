function render(aluno){
    return {
        id: aluno._id,
        nome: aluno.nome,
        curso: aluno.curso,
        matricula: aluno.matricula
    }
}

module.exports.render = render;

function renderMany(alunos){
    return alunos.map(render)
}

module.exports.renderMany = renderMany;
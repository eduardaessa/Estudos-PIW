function render(disciplina){
    return {
        id: disciplina._id,
        nome: disciplina.nome,
        curso: disciplina.curso,
    }
}

module.exports.render = render;

function renderMany(disciplinas){
    return disciplinas.map(render)
}

module.exports.renderMany = renderMany;
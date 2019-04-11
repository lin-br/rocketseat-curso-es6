const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

// Exibe todos os atributos
console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.endereco.cidade);

/*
* Não existe nenhuma informação declarada com essas variaveis, por isso
* ocorre uma EXCEPTION e elas são informadas como undefined
* */
try {
    console.log(nome);
    console.log(idade);
    console.log(cidade);
} catch (e) {
}

// Recupera as informações e salva em variaveis
const {nome, idade, endereco: {cidade}} = usuario;

// Agora existe as variaveis declaradas e por isso recupera as informações
console.log();
console.log(nome);
console.log(idade);
console.log(cidade);

// É possível recuperar informações com desestruturação em funções também:
function mostraNome({nome, idade}) {
    console.log(nome, idade);
}

mostraNome(usuario);
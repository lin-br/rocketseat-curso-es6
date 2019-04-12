const nome = 'Lin';
const idade = 23;

/*
* Para passar as informações à um objeto, no ECMA6+ se o nome da variável
* é igual ao atributo do objeto, NÃO é necessário informa-lo desta maneira:
* nome = nome, idade = idade:
* */
const teste = {
    nome,
    idade,
    empresa: 'Rocketseat',
};

console.log(teste);
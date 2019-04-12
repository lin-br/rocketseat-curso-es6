const usuario = {
    nome: 'Lin',
    idade: 23,
    empresa: 'Rocketseat'
};

/*
* utiliza o rest(reticências) para informar que o restante dos
* atributos serão salvos em uma única variavel chamada 'resto'
* */
const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const array = [1, 2, 3, 4, 5];

/*
* utiliza o rest(reticências) para informar que o restante das informações
* do array será salvo em uma única variável chamada 'c'
* */
const [a, b, ...c] = array;

console.log(a);
console.log(b);
console.log(c);

/*
* utiliza o rest(reticências) para passar vários valores em um único parâmetro
* da função.
* */
function somar(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(somar(1, 2, 3, 4, 5));
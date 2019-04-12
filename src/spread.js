const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

/*
* o spread(reticências) vai copiar cada conteúdo dos dois arrays e salvar em um
* único array, como se escrevesse: array3 = [1,2,3,4,5,6];
* */
const array3 = [...array1, ...array2];
console.log(array3);

const usuario1 = {
    nome: 'Lin',
    idade: 25,
    empresa: 'Rocketseat'
};

/*
* o spread(reticências) vai copiar cada atributo do usuario1 para o usuario2 e sobrepor
* o atributo chamado 'nome'
* */
const usuario2 = {...usuario1, nome: 'Teste'};

console.log(usuario2);
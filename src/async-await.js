/*
* As instruções async e await é utilizada em códigos assíncronos, geralmente em Promise.
* E são utilizados para não ser necessário realizar uma codificação em cascata ou
* com várias instruções de then() e catch() em cima de uma Promise.
*
* Com várias instruções de await em sequencia, quer dizer que o javascript vai processar
* as informações da primeira linha, quando acabar vai processar da segunda linha,
* quando acabar vai processar da terceira linha e assim por diante...
* */

// Função qualquer que retorna uma Promise:
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('OK'), 2000);
});

// Função que utiliza async e await:
async function executaPromise() {

    // Executando três vezes a função minhaPromise() em cascata com menos verbosidade:
    // Primeira execução:
    console.log(await minhaPromise());
    // Segunda execução:
    console.log(await minhaPromise());
    // Terceira execução:
    console.log(await minhaPromise());


    // Execução do código à cima sem as instruções async e await:
    minhaPromise().then(response => {
        console.log(response);

        minhaPromise().then(response => {
            console.log(response);

            minhaPromise().then(response => {
                console.log(response);
            })
        })
    })
}

// Função escrita com array function:
const executaPromiseAsyncComArrayFunction = async () => {
    // Primeira execução:
    console.log(await minhaPromise());
    // Segunda execução:
    console.log(await minhaPromise());
    // Terceira execução:
    console.log(await minhaPromise());
};

// Executa a função executaPromise():
executaPromise();
executaPromiseAsyncComArrayFunction();
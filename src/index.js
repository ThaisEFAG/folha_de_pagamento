const readline = require('readline');

// let -> sofre alteração durante a execução do programa
// const -> valor fixo durante a execução do programa

// 

const input = readline.createInterface(
    // Perguntas no teminal
    // captura de processos de entrada de dados
    process.stdin,
    // captura de processos de saída de dados
    process.stdout
);

let nome = "";
let sobrenome = "";

input.question("qual o seu nome?", (nomeDigitado) => {
 nome = nomeDigitado

input.question("quak seu sobrenome?", (sobrenomeDigitado) => {
        sobrenome = sobrenomeDigitado
         input.close()
         console.log(`${nome} ${sobrenome}`)
})
})

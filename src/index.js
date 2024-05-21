const readline = require("readline");
const input = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});
const calculoSalario = require("./calculo_salario_liquido")
// file system= lidar com os arquivos
const fs = require ('fs');
// PDFDocument = geração do PDF
const PDFDocument = require ('pdfkit');

const doc = new PDFDocument({ size: 'a4' });
// destino dos dados após a geração do PDF
doc.pipe(fs.createWriteStream('holerite.pdf'));
// configurações do PDF
doc.fontSize(12);

doc.fontSize(20).text('Folha de pagamento', 200, 100);

doc.text(`Nome: ${arraysin.nome}`);
doc.text(`Mês: ${arraysin.mes}`);
doc.text(`Salário Bruto: R$${arraysin.salarioDigit1}`);
doc.text(`INSS: R$ ${valoresCalculos.INSS}`);
doc.text(`Imposto de Renda: R$ ${valoresCalculos.ir}`);
doc.text(`Salário líquido: R$ ${valoresCalculos.Salario_liquido}`);
doc.end();
// let -> sofre alteração durante a execução do programa
// const -> valor fixo durante a execução do programa

//

// const input = readline.createInterface(
//     // Perguntas no teminal
//     // captura de processos de entrada de dados
//     process.stdin,
//     // captura de processos de saída de dados
//     process.stdout
// );

// let nome = "";
// let sobrenome = "";

// input.question("qual o seu nome?", (nomeDigitado) => {
//  nome = nomeDigitado

// input.question("quak seu sobrenome?", (sobrenomeDigitado) => {
//         sobrenome = sobrenomeDigitado
//          input.close()
//          console.log(`${nome} ${sobrenome}`)
// })
// })

let cpf = null 
// /^(\d{3}\.\d{3}\.\d{3}\-\d{2})$/;
let mes = null;
let arraysin = [];
let salarioDigit1 = null



// let inputSalarioBruto = 0;

input.question("Qual o seu nome?", (nomeDigitado) => {
  let nome = nomeDigitado;
  arraysin.nome = nome;
  digitarCPF()
});

  function digitarCPF(){
  input.question("Qual o seu CPF:", (cpfDigitado) => {
    if (cpf = Number(cpfDigitado)) {
      arraysin.cpf = cpf
      digitarMes()
    } else {
      console.log("CPF não valido, CPF deve conter o formato 000.000.000-00");
      digitarCPF();
    }}
  )};
  
      function digitarMes(){
      input.question("Qual mês deseja visualizar?", (mesDigitado) => {
        mes = Number(mesDigitado);
        if(mes >= 1 && mes <= 12){
        arraysin.mes = mes;
        salarioInput()
        }else {
          console.log(`Mês deve conter o formato numérico e somente números de 1 a 12`);
          digitarMes()
        }
       })}

      function salarioInput(){
        input.question("Digite o seu salário bruto: ", (salarioDigitado1) => {
          if(salarioDigit1 = Number(parseFloat(salarioDigitado1))){
            arraysin.salarioDigit1 = salarioDigit1;
            input.close()
          }else{
            console.log("Valor inválido")
            salarioInput()
          };
            let valoresCalculos = calculoSalario(salarioDigit1)
            // console.log(arraysin, valoresCalculos)
            console.log(`\n------- Folha de pagamento -----\nNome: ${arraysin.nome}\nCPF: ${arraysin.cpf}\nMês: ${arraysin.mes}\nSalário Bruto: R$${arraysin.salarioDigit1}\n\n______Descontos______\nINSS: R$ ${valoresCalculos.INSS}\nImposto de Renda: R$ ${valoresCalculos.ir}\n\nSalário líquido: R$ ${valoresCalculos.Salario_liquido}`)
        })
      }

      module.exports = salarioInput;

// 5-(index.js) exibir o valor liquido no console. 6- perguntar se o funcionario quer imprimir em pdf

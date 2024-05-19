const readline = require("readline");
const input = readline.createInterface(process.stdin, process.stdout);

let inputSalario = "";

input.question("Qual o valor do seu salario?", (salarioDigitado) => {
  input.close();
  inputSalario = salarioDigitado;
  if (inputSalario <= 908.84) {
    console.log("Não tem taxa de inss");
    return;
  }
  if (inputSalario >= 908.85 && inputSalario <= 1412.0) {
    const porcentagemInss1 = inputSalario * (7.5 / 100);
    console.log(`A taxa de inss cobrada é ${porcentagemInss1}`);
  }
  if (inputSalario >= 1412.01 && inputSalario <= 2666.68) {
    const porcentagemInss2 = inputSalario * (9 / 100);
    console.log(`A taxa do inss é ${porcentagemInss2}`);
  }
  if (inputSalario >= 2666.69 && inputSalario <= 4000.03) {
    const porcentagemInss3 = inputSalario * (12 / 100);
    console.log(`A taxa de inss é ${porcentagemInss3}`);
  }
  if (inputSalario >= 4000.04 && inputSalario <= 7786.02) {
    const porcentagemInss4 = inputSalario * (14 / 100);
    console.log(`A taxa de inss é ${porcentagemInss4}`);
  } else {
    console.log("Taxas exorbitantes");
  }
});

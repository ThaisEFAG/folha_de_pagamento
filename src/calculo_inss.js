let inputSalario = 0;

function calculoINSS(salarioDigitado) {
  inputSalario = parseFloat(salarioDigitado);
  if (inputSalario <= 908.84) {
    console.log("Não tem taxa de inss");
    return;
  }
  if (inputSalario >= 908.85 && inputSalario <= 1412.0) {
    const porcentagemInss1 = inputSalario * (7.5 / 100);
    return porcentagemInss1;
  }
  if (inputSalario >= 1412.01 && inputSalario <= 2666.68) {
    const porcentagemInss2 = inputSalario * (9 / 100);
    return porcentagemInss2;
  }
  if (inputSalario >= 2666.69 && inputSalario <= 4000.03) {
    const porcentagemInss3 = inputSalario * (12 / 100);
    return porcentagemInss3;
  }
  if (inputSalario >= 4000.04 && inputSalario <= 7786.02) {
    const porcentagemInss4 = inputSalario * (14 / 100);
    return porcentagemInss4;
  } else {
    console.log("Taxas exorbitantes");
  }
}

module.exports = calculoINSS;

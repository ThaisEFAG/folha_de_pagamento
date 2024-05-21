let inputIR = 0;

function calculoIR(irDigitado) {
  inputIR = parseFloat(irDigitado);
  //   if (inputIR <= 2112.00) {
  //     console.log("IR isento");
  //     return;
  //   }
  if (inputIR >= 2112.01 && inputIR <= 2826.65) {
    const porcentagemIR1 = inputIR * (7.5 / 100);
    return porcentagemIR1;
  }
  if (inputIR >= 2826.66 && inputIR <= 3751.05) {
    const porcentagemIR2 = inputIR * (15 / 100);
    return porcentagemIR2;
  }
  if (inputIR >= 3751.06 && inputIR <= 4664.68) {
    const porcentagemIR3 = inputIR * (22.5 / 100);
    return porcentagemIR3;
  }
  if (inputIR >= 4664.68) {
    const porcentagemIR4 = inputIR * (27.5 / 100);
    return porcentagemIR4;
  } else {
    return "IR isento";
  }
}

module.exports = calculoIR;

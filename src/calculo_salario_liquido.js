const calculoIR = require("./calculo_imposto_renda");
const calculoINSS = require("./calculo_inss");

function calculoSalario(valorparacalcular) {
  let ir = calculoIR(valorparacalcular);
  let inss = calculoINSS(valorparacalcular);

  // if(ir =! irNaN){
  if (ir >= 152.4) {
    let saliquido = valorparacalcular - ir - inss;
    return {
      ir: ir,
      INSS: inss,
      Salario_liquido: saliquido,
      // }
    };
  }
}

module.exports = calculoSalario;

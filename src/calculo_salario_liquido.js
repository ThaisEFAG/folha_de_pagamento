const calculoIR = require("./calculo_imposto_renda")
const calculoINSS = require("./calculo_inss")


function calculoSalario(valorparacalcular){
let ir = calculoIR(valorparacalcular);
let inss = calculoINSS(valorparacalcular);
let saliquido = valorparacalcular - ir - inss
return {
    "ir": ir,
    "INSS": inss,
    "Salario_liquido": saliquido
}

}

module.exports = calculoSalario;
// 4- pegar o salario bruto da index e subtrair o ir e inss(usar funções importadas para aquisição do valor baseado na porcentagem) e 
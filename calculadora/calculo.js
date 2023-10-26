function calcular(numberOne, numberTwo, operador) {
    let resultado;
  
    if (operador === '+') {
      resultado = numberOne + numberTwo;
    } else if (operador === '-') {
      resultado = numberOne - numberTwo;
    } else if (operador === '*') {
      resultado = numberOne * numberTwo;
    } else if (operador === '/') {
      resultado = numberOne / numberTwo;
    } else {
      console.log('Informe um operador válido');
    }
  
    return resultado;
  }
  
  module.exports = calcular;  
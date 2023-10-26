const readline = require('readline');
const calcular = require('./calculo'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu nome: ', (nome) => {
  console.log(`Olá, ${nome}! Bem-vindo a Calculadora em JavaScript!`);

  rl.question('Digite o valor do primeiro número: ', (numberOne) => {
    numberOne = parseFloat(numberOne);

  rl.question('Digite o valor do segundo número: ', (numberTwo) => {
    numberTwo = parseFloat(numberTwo);
  
  rl.question('Agora, informe o operador que você deseja utilizar: ', (operador) => {    const resultado = calcular(numberOne, numberTwo, operador);

  console.log('O resultado da operação é: ' + resultado);
    rl.close();
    });
  });
});
});
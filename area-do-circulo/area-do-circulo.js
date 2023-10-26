const readline = require('readline');
const { areaCirculo } = require('./calc-area.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu nome: ', (nome) => {
  console.log(`Olá, ${nome}! Bem-vindo ao programa básico da Área do Círculo em JavaScript!`);

  rl.question('Agora, digite o valor do raio: ', (raio) => {
    raio = parseFloat(raio);

    const area = areaCirculo(raio);

    var numeroArredondado = area.toFixed(2);

    console.log("A área do círculo é: " + numeroArredondado);

    rl.close();
  });
});
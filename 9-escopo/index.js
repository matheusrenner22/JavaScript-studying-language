// ESCOPO DE FUNÇÃO
// variáveis declaradas dentro de funções não são acessadas fora das mesmas
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

// escopo evita o conflito entre nomes.



// VARIÁVEL GLOBAL (ERRO)
// declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessada em qualquer escopo (global). Isto é um erro.
function mostrarCarro() {
  carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca

// 'use strict' impede isso.



// ESCOPO DE FUNÇÃO (PAI)
// variáveis declaradas no escopo pai de função, conseguem ser acessadas pelas funções
var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca



// ESCOPO DE BLOCO
// variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.
if (true) {
  var carro = 'Fusca';
  console.log(carro);
}

console.log(carro); // Fusca



// VAR VAZA O BLOCO
// mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará com undefined
if (false) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // undefined



// CONST E LET NO LUGAR DE VARIÁVEL
// a partir de agora vamos utilizar apenas const e let para declararmos variáveis.
if (true) {
  const carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // erro, carro is not defined



// {} CRIA UM BLOCO
// chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}
{
  var carro = 'Fusca';
  const ano = 2018;
}

console.log(carro); // Fusca
console.log(ano); // erro ano is not defined



// FOR LOOP
// ao utilizar var dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e exisitir fora do loop
for (var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10



// FOR LOOP COM LET
// com o let evitamos que o número vaze
for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined



// CONST
// mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código
const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
};

data.dia = 29; // Funciona
data = 'Janeiro'; // erro

// variáveis com valores constantes devem utilizar o const



// LET
// mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; // erro, redeclarou a variável

// geralmente vamos utilizar o const



// EXERCÍCIO

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
// console.log(var, marca, portas); // tipo da variável colocada para imprimir quando na verdade deveria ser o nome da variável e não seu tipo.

// Como corrigir o erro abaixo?
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  const dois = 2;
  return x + dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
var numero = 0;
for (numero; numero < 50; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

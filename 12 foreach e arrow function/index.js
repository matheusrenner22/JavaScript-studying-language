// FOREACH
// constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
var imgs = document.querySelectorAll('img');

imgs.forEach(function (item) {
  console.log(item);
});

// PARÂMETROS DO FOREACH
// o primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros: valorAtual, index e array;
var imgs = document.querySelectorAll('img');

imgs.forEach(function (item, index, array) {
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

// FOREACH E ARRAY
// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.
var titulos = document.getElementsByClassName('titulo');
var titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  console.log(item);
});

// ARROW FUNCTION
// sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após o argumento
var imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
});

// PARÂMETROS E PARÊNTESES
var imgs = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs.forEach((item) => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
var i = 0;
imgs.forEach(() => {
  console.log(i++);
});

// É melhor utilizar os parênteses

// RETURN
// é possível omitir as chaves {} para uma função que retorna uma linha
var imgs = document.querySelectorAll('img');

imgs.forEach((item) => console.log(item));

imgs.forEach((item) => console.log(item));

// Não é permitido fechar a linha com ;

// EXERCÍCIO

// Mostre no console cada parágrado do site
var paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach(item, (index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

// ID
// getElementById seleciona e retorna elementos do DOM
// Seleciona o ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');



// CLASSE E TAG
// getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
var gridSection = document.getElementsByClassName('grid-section');
var contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);



// SELETOR GERAL ÚNICO
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS
const animais = document.querySelector('.animais');
var contato = document.querySelector('#contato');
var ultimoItem = document.querySelector('.animais-lista li:last-child');
var linkCSS = document.querySelector('[href^="https://"]');
var primeiroUl = document.querySelector('ul');

// Busca dentro do ul apenas
var navItem = primeiroUl.querySelector('li');



// SELETOR GERAL LISTA
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
var gridSection = document.querySelectorAll('.grid-section');
var listas = document.querySelectorAll('ul');
var titulos = document.querySelectorAll('.titulos');
var fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento
console.log(gridSection[1]);

// diferente do getElementsByClassName, a lista aqui é estática



// HTMLCOLLECTION VS NODELIST
// a diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.
var titulo = document.querySelector('.titulo');
var gridSectionHTML = document.getElementsByClassName('grid-section');
var gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens



// ARRAY-LIKE
// HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de array forEach() por exemplo, existe apenas em NodeList.
var gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach((gridItem, index, array) => {
  gridItem.classList.add('azul');
  console.log(index); // index do item no array
  console.log(array); // a array completa
});

// É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)



// EXERCÍCIO

// Retorne no console todas as imagens do site
var imagens = document.querySelectorAll('img');

// Retorne no console apenas as imagens que começaram com a palavra imagem
var imagensAnimais = document.querySelectorAll('img[src^="img/imagens"]');

// Selecione todos os links internos (onde o href começa com #)
var linkInterno = document.querySelectorAll('[href^="#"]');

// Selecione o primeiro h2 dentro de .animais-descricao
var h2Animais = document.querySelector('.animais-descricao h2');

// Selecione o último p do site
var paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);
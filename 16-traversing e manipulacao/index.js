// OUTERHTML, INNERHTML E INNERTEXT
// propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.
var menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada



// TRASVERSING
// como navegar pelo DOM, utilizando suas propriedades e métodos.
var lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[-- lista.children.length]; // último filho

lista.querySelectorAll('li'); // todos as LI's
lista.querySelector('li:last-child'); // último filho



// ELEMENT vs NODE
// Element's representam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento(Element), texto, comentário, quebra de linha e mais. 

var lista = document.querySelector('.animais-lista');

lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child

// geralmente estamos atrás de um elemento e não de qualquer node em si.



// MANIPULANDO ELEMENTOS
// é possível mover elementos no dom com métodos de Node.

var lista = document.querySelector('.animais-lista');
var contato = document.querySelector('.contato');
var titulo = contato.querySelector('.titulo');

contato.appendChild(lista); // move lista para o final de contato
contato.insertBefore(lista, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
contato.replaceChild(lista, titulo); // substitui titulo por lista



// NOVOS ELEMENTOS
// podemos criar novos elementos com o método createElement()
var animais = document.querySelector('.animais');

var novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
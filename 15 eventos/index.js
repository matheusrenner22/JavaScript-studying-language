// ADDEVENTLISTENER
// adiciona uma função ao elemento esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.

var img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
  console.log('Clicou');
});

// o terceiro parâmetro é opcional



// CALLBACK
// é boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima.
var img = document.querySelector('img');

function callback() {
  console.log('Clicou');
}

img.addEventListener('click', callback);
img.addEventListener('click', callback()); // undefined
img.addEventListener('click', function() {
  console.log('Clicou');
});

img.addEventListener('click', () => {
  console.log('Clicou');
});



// EVENT
// o primeiro parâmetro do callback é referente ao evento que ocorreu
var img = document.querySelector('img');

function callback(event) {
  console.log(event);
}

img.addEventListener('click', callback);

// Geralmente utilizam e como nome do parâmetro



// PROPRIEDADES DO EVENT
var animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  var currentTarget = event.currentTarget; // this
  var target = event.target; // onde o clique ocorreu
  var type = event.type; // tipo de evento
  var path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);



// EVENT.PREVENTDEFAULT()
// previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá prevenir que o link seja ativado.

var linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);



// THIS
// a palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

var img = document.querySelector('img');

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute('src'));
}

img.addEventListener('click', callback);

// Geralmente igual ao event.currentTarget



// DIFERENTES EVENTOS
// existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.
var h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
h1.addEventListener('scroll', callback);
h1.addEventListener('resize', callback);
h1.addEventListener('keydown', callback);

// https://developer.mozilla.org/en-US/docs/Web/Events



// KEYBOARD
// você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.

function handleKeyboard(event) {
  if(event.key === 'a') {
    document.body.classList.toggle('azul');
  } else if(event.key === 'v') {
    document.body.classList.toggle('vermelho');
  }
}

window.addEventListener('keydown', handleKeyboard);



// FOREACH E EVENTOS
// o método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.
var imgs = document.querySelectorAll('img');

function imgSrc(event) {
  var src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});



// EXERCÍCIO

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
var linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink);
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
var todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
  console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleKeyboard);
});

console.log(todosElementos);


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(event) {
  console.log(event.key);
  if (event.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('keydown', handleClickT);
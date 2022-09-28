// HEIGHT e WIDTH
// estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

var section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

// mesma coisa para o width, clientWidth ...



// OFFSETTOP E OFFSETLEFT

var section = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre a base do elemento e a base da página
section.offsetDown;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;

// Distância entre o canto direito do elemento
// e o canto direito da página
section.offsetRight;



// GETBOUNDINGCLIENTRECT()
// método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

var section = document.querySelector('.animais');

var rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll



// WINDOW
window.innerWidth; // width da janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height da janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela maior que 600px');
}



// MATCHMEDIA();
// utilize um media-querie como no CSS para verificar a largura do browser
var small = window.matchMedia('(max-width: 600px)');

if (small.matches) {
  console.log('Tela menor que 600px');
} else {
  console.log('Tela maior que 600px');
}



// DICA

// - Selecione o elemento no inspetor (dom)
// - Abra o console e digite $0 para selecionar o mesmo
// - Os elementos selecionados anteriormente são $1, $2...



// EXERCÍCIO

// Verifique a distância da primeira imagem
// em relação ao topo da página
var imgs = document.querySelector('.imagens img');
var imgTop = imgs.offsetTop;

console.log(imgTop);



// Retorne a soma da largura de todas as imagens
function somaImagens() {
  var imgs = document.querySelectorAll('img');
  var soma = 0;

  imgs.forEach((img) => {
    soma += img.offsetWidth;
  });

  console.log(soma);
}

// Onload seria um método definido para ser executado após o carregamento completo da página
// no caso aqui, onload irá carregar a function que contém a somaImgens()
window.onload = function() {
  somaImagens();
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
var links = document.querySelectorAll('a');

links.forEach((link) => {
  var linkWidth = link.offsetWidth;
  var linkHeight = link.offsetHeight;

  if (linkWidth > 48 && linkHeight > 48) {
    console.log(link, 'Possui acessibilidade');
  } else {
    console.log(link, 'Não possui acessibilidade');
  }
});

console.log(links);


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
var browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall) {
  var menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');  
}
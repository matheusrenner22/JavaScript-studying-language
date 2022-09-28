// CLASSLIST
// retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

var menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo'); // adicionando a classe ativo
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo'); // removendo a classe ativo
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo'); // substitue ativo por inativo



// ATTRIBUTES
// retorna uma array-like com os atributos do elemento.
var animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo



// GETATTRIBUTE E SETATTRIBUTE
// métodos que retornam ou definem de acordo com o atributo selecionado
var img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttribute(); // true / false se tem algum atributo

// É muito comum métodos get e set;



// READ ONLY VS WRITABLE
// existem propriedades que não permitem a mudança de seus valores, essas são considerados ReadOnly, ou seja, apenas leitura
var animais = document.querySelector('.animais');

animais.className; // string com o nome da classe
animais.className = 'azul'; // substitui completamente a string
animais.className += 'vermelho'; // adiciona vermelho á string

animais.attributes = 'class="ativo"'; // não funciona, read-only

// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedad = ''



// EXERCÍCIO

// Adicione a classe ativo a todos os itens do menu
var itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});

itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
var imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  var possuiAtributos = img.hasAttribute('alt');
  console.log(possuiAtributos);
});

// Modifique o href do link externo no menu
var link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');

console.log(link);
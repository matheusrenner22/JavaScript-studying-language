// OBJETOS
// criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.

var carro = {
  marca: 'Marca',
  preco: 0,
}

var honda = carro;
honda.marca = 'Honda';
honda.preco = 400;


var fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 3000;

// carro, fiat e honda apontam para o mesmo objeto.



// CONSTRUCTOR FUNCTIONS
// para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

function Carro() {
  this.carro = 'Marca';
  this.preco = 0;
}


var honda = new Carro();
honda.marca = 'Honda';
honda.preco = 400;

var fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;

// Usar Pascal case, ou seja, começar com letra maiúscula



// NEW KEYWORD
// a palavra chave new é responsável por criar um novo objeto baseado na função que passamos a frente dela.

var honda = new Carro();

// 1 cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5 Retorna o novo objeto

return honda = {
  marca: 'Honda',
  preco: 0,
}



// PARÂMETROS E ARGUMENTOS
// podemos passar argumentos que serão utilizados no momento da criação do objeto
function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

var honda = new Carro('Honda', 4000);
var fiat = new Carro('Fiat', 3000);

 

// THIS KEYWOOD
// o this faz referência ao próprio objeto construído com a Constructor Function
function Carro(marca, precoInicial) {
  var taxa = 1.2;
  var precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

var honda = new Carro('Honda', 2000);

// Variáveis dentro do Constructor estão 'protegidas'.



// EXEMPLO REAL
// quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos

var Dom = {
  seletor: 'li',
  element() {
    return document.querySelector(this.seletor);
  },
  ativo() {
    this.element().classList.add('ativo');
  },
}

Dom.ativo(); // adiciona ativo ao li
Dom.seletor = 'ul';
Dom.ativo(); // adiciona ativo ao ul



// CONSTRUCTOR FUNCTION REAL
// um objeto criado com um Constructor, não irá influenciar em outro objeto criado com a mesma Constructor
function Dom() {
  this.seletor = 'li';
  var element = document.querySelector(this.element);
  this.ativo = function () {
    element.classList.add('ativo');
  };
}

var lista = new Dom();
lista.seletor = 'ul';
lista.ativo();

var lastLi = new Dom();
lastLi.seletor = 'li:last-child';
lastLi.ativo();



// LEMBRE-SE DE USAR PARÂMETROS
function Dom(seletor) {
  var element = document.querySelector(seletor);
  this.ativo = function(classe) {
    element.classList.add(classe);
  };
}

var lista = new Dom('ul');
lista.ativo('ativo');

var lastli = new Dom('li:last-child');
lastLi.ativo('ativo');



// EXERCÍCIOS

// Transforme o objeto abaixo em uma Constructor Function
var pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = () => {
    console.log(`${this.nome} andou`);
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
var pessoa1 = new Pessoa('João', 20);
var pessoa2 = new Pessoa('Maria', 25);
var pessoa3 = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(elements) {
  this.elements = document.querySelectorAll(elements);
  this.addClass = (classe) => {
    this.elements.forEach(item => {
      item.classList.add(classe);
    });
  };
  this.removeClass = (classe) => {
    this.elements.forEach(item => {
      item.classList.remove(classe);
    });
  }
}

var elemento = new Dom('ul');
elemento.addClass('ativo');
elemento.removeClass('ativo');
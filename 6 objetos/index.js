// OBJETOS
// conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true

// propriedades e métodos consistem em nome (chave) e valor



// MÉTODOS
// é uma propriedade que possui uma função no local do seu valor
var quadrado1 = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado1.lados; // 4
quadrado1.area(5); // 25
quadrado1.perimetro(5); // 20

// abreviação de area: function() {} para area() {}, no ES6+
var quadrado2 = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

quadrado2.lados; // 4
quadrado2.area(5); // 25
quadrado2.perimetro(5); // 20



// ORGANIZAR O CÓDIGO
// objetos servem para organizar o código em pequenas partes reutilizáveis
Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

// Math é um objeto nativo do JavaScript. Já percebeu que console é um objeto e log() um método?



// CRIAR UM OBJETO
// um objeto é criado utilizando as chaves {}
var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'



// DOT NOTATION GET
// Acesse propriedades de um objeto utilizando o ponto .
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'



// DOT NOTATION SET
// substitua o valor de uma propriedade utilizando . e ou = após o nome da mesma
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'



// ADICIONAR PROPRIEDADES E MÉTODOS
// basta adicionar um novo nome e definir o valor.
var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';



// PALAVRA-CHAVE THIS
// this irá fazer uma referência ao próprio objeto.
var height = 120;

var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
}

menu.metadeHeight(); // 25
// sem o this, seria 60, ou seja ele pegaria o height de fora



// PROTÓTIPO E HERANÇA
// o objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo
var menu2 = {
  width: 800,
}

menu.hasOwnProperty('width'); // true
menu.hasOwnProperty('height'); // false

// hasOwnProperty é um método de Object



// EXERCÍCIO

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoa = {
  nome: 'Matheus',
  sobrenome: 'Renner',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoa.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  acao(visivel) {
    if (visivel === 'homem') {
      console.log(`${this.raca} late`);
    } else {
      console.log('Nada acontece');
    }
  },
}

cachorro.acao('homem') // Labrador late
cachorro.acao('nada'); // Nada acontece
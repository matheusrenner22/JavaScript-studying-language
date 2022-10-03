// OBJECT
// todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos

var carro = {
  marca: 'Ford',
  ano: 2018,
}

var pessoa = new Object({
  nome: 'André',
  idade: 28,
});



// MÉTODOS DE OBJECT
// Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.
var carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.roda} rodas`;
  },
  buzinar() {
    return this.marca + ' buzinou';
  },
}

var honda = Object.create(carro);
honda.init('Honda').acelerar();



// OBJECT.ASSIGN()
// Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumaráveis dos demais objetos. O assign irá modificar o objeto alvo.
var funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

var moto = {
  rodas: 2,
  capacete: true,
}

var carro = {
  rodas: 4,
  mala: true,
}

Object.assign(moto, funcaoAutomovel);
Object.assign(carro, funcaoAutomovel);



// OBJECT.DEFINEPROPERTIES()
// Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.
var moto = {};
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumerable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
});

moto.rodas = 4;
delete moto.capacete;
moto;
// {rodas: 2}

// Existe também o Object.defineProperty, para uma propriedade única.



// GET E SET
// É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor'. A função de set é ativada.

var moto = {};
Object.defineProperties(moto, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
});

moto.velocidade = 200;
moto.velocidade;

// Velocidade 200



// OBJECT.GETOWNPROPERTYDESCRIPTORS(OBJ)
// Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações
Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade



// OBJECT.KEYS(OBJ), OBJECT.VALUES(OBJ) OBJECT.ENTRIES(OBJ)
// Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enuméraveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.
Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

var carro = {
  marca: 'Ford',
  ano: 2018,
}

Object.keys(carro);
// ['marca', 'ano']
Object.values(carro);
// ['Ford', 2018]
Object.entries(carro);
// [['marca', 'Ford'], ['ano', 2018]]



// OBJECT.GETOWNPROPERTYNAMES(OBJ)
// retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).
Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

var carro = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carro);
// ['marca', 'ano']



// OBJECT.GETPROTOTYPEOF() E OBJECT.IS()
// Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.
var frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // String

var frutas1 = ['Banana', 'Pêra'];
var frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false



// OBJECT.FREEZE(), OBJECT.SEAL(), OBJECT.PREVENTEXTENSIONS()
// Object.freeze() impede qualquer mudança nas propriedades, Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.
var carro = {
  marca: 'Ford',
  ano: 2018,
}

Object.freeze(carro);
Object.seal(carro);
Object.preventExtensions(carro);

Object.isFrozen(carro); // true
Object.isSealed(carro); // true



// PROPRIEDADES E MÉTODOS DO PROTÓTIPO
// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.
var frutas = ['Banana', 'Uva'];
frutas.constructor; // Array

var frase = 'Isso é uma String';
frase.constructor; // String



// {}.HASOWNPROPERTY('PROP') E {}.PROPERTYLSENUMERABLE('PROP')
// Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.
var frutas = ['Banana', 'Uva'];

frutas.hasOwnProperty('mp'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true



// {}.ISPROTOTYPEOf(valor)
// verifica se é o protótipo do valor passado.
var frutas = ['Banana', 'Uva'];
Array.prototype.isPrototypeOf(frutas); // true



// {}.TOSTRING()
// retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).
var frutas = ['Banana', 'Uva'];
frutas.toString(); // 'Banana,Uva'
typeof frutas; // object
Object.prototype.toString.call(frutas); // [object Array]

var frase = 'Uma String';
frase.toString(); // 'Uma String'
typeof frase; // string
Object.prototype.toString.call(frase); // [object String]



// EXERCÍCIOS

// Crie uma função que verifique
// corretamente o tipo de dado

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

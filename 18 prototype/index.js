// PROTOTYPE
// a propriedade prototype é um objeto adicionado a uma função quando a mesma é criada
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

var andre = new Pessoa('André', 28);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined



// FUNCAO.PROTOTYPE
// é possivel adicionar novas propriedades e métodos ao objeto prototype
Pessoa.prototype.andar = function() {
  return this.nome + ' andou';
}

Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou';
}

console.log(Pessoa.prototype); // retorna o objeto



// ACESSO AO PROTÓTIPO
// o objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma proprieadade de funções apenas.
var andre = new Pessoa('André', 28);

andre.nome;
andre.idade;
andre.andar();
andre.nadar();



// PROTO
// o novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.

// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.name
andre.andar();
andre.__proto__.andar();



// HERANÇA DE PROTÓTIPO
// o objeto possui acesso aos métodos e propriedades do protótipo do constructor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos. mas são herdados do protótipo de Object.
Object.prototype;
andre.toString();
andre.isPrototypeOf();
andre.valueOf();



// CONSTRUTORES NATIVOS
// Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedade e métodos. que poderão ser acessados pelo tipo de dado.
var pais = 'Brasil';
var cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;



// É POSSÍVEL ACESSAR A FUNÇÃO DO PROTÓTIPO
// é comum, prinpalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array.

var lista = document.querySelectorAll('li');

// Transforma em uma array
var listaArray = Array.prototype.slice.call(lista);

// Existe o método Array.from();



// MÉTODO DO OBJETO VS PROTÓTIPO
// Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo
Array.prototype.slice.call(lista);
Array.from(lista);

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

// dado.constructor.name, retorna o nome do construtor;



// APENAS OS MÉTODOS DO PROTÓTIPO SÃO HERDADOS
[1, 2, 3].slice(); // existe
[1, 2, 3].from(); // não existe



// ENTENDA O QUE ESTÁ SENDO RETORNADO
// os métodos e propriedades acessados com o . são referente ao tipo de dados que é retornado antes desse .
var carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  },
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String

// Verifique o nome do construtor com .constructor.name



// EXERCÍCIOS

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.nomeCompleto = () => {
    return `${this.nome} ${this.sobrenome}`;
  };
}

var pessoa = new Pessoa('Matheus', 'Renner', 22);
console.log(pessoa.nomeCompleto());
// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;

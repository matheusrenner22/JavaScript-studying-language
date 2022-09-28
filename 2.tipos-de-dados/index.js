// 7 tipos de dados
// Todos são primitivos exceto os objetos.
var nome = 'Matheus'; // String
var idade = 22; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var nomeObjeto = {} // Object

// Primitivos são dados imutáveis



// VERIFICAR TIPO DE DADO
var nome = 'Matheus';
console.log(typeof nome);
// retorna string

// typeof null retorna object



// STRING
// você pode somar uma string e assim concatenar as palavras.
var nome = 'Matheus';
var sobrenome = 'Renner';
var nomeCompleto = nome + ' ' + sobrenome;

// você pode somar números com strings, o resultado final é sempre uma string.
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';



// ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido

// Não necessariamente precisamos atribuir valores a uma variável



// TEMPLATE STRING
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String

// Você deve passar variáveis dentro de ${}



// EXERCÍCIO
// Dica rápida, frases(string) devem ser colocadas entre aspas(simples ou duplas) e números não levam aspas

// Declare uma variável contendo uma string
var nome = 'Matheus';

// Declare uma variável contendo um número dentro de uma string
var idade = '22';

// Declare uma variável com a sua idade
var idade = 22;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome = 'Matheus';
var sobrenome = 'Renner';
var nomeCompleto = `${nome} ${sobrenome}`;

// Coloque a seguinte frase em uma variável: It's time
var frase = 'It\'s time';
var frase2 = "It's time";
var frase3 = `It's time`;

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);
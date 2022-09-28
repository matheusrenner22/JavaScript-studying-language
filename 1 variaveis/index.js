// VARIÁVEIS
var nome = 'André';
let idade  = 28;
const possuiFaculdade = true;



// EVITAM REPETIÇÕES DRY (Don't repeat yourself)
var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;



// SINTAXE
// Palavra chave var seguida do nome, sinal de igual e o valor
var nome = 'Matheus';
var altura = 1.70;
var possuiEstudo = true;



// VÍRGULA
// Utilize a vírgula para criar mais de uma variável, sem repetir a palavra var.
var nome = 'Mathues',
    altura = 1.70,
    possuiEstudo = true;



// SEM VALOR
// Pode declarar ela e não atribuir valor inicialmente
var precoAplicativo;
// retorna undefined



// NOME
/**
 * Os nomes podem iniciar com $, _, ou letras.
 * podem conter números mas não iniciar com eles
 * 
 * Case sensitive
 * nome é diferente de Nome
 * 
 * Não utilizar palavras reservadas
 * https://www.w3schools.com/js/js_reserved.asp
 * 
 * Camel case
 * É comum nomearmos assim: abrirModal
 */

// NOME
// Inválido:
// var §nome;
// var function;
// var 1possuiFaculdade;

// Válido
// var $selecionar;
// var _nome;
// var possuiFaculdadeNoExterior;



// DECLARAR
// Erro ao tentar utilizar uma variável que não foi declarada.
console.log(nome);
// retorna nome is not defined



// HOISTING
// são movidas para cima do código, porém o valor atribuído não é movido.
console.log(nome);
var nome = 'Matheus';
// Retorna undefined

var profissao = 'Programador';
console.log(profissao);
// Retorna Programador



// MUDAR O VALOR ATRIBUÍDO
// é possível mudar os valores atribuídos a variáveis declaradas com var e let. porém não é possível modificar valores das declaradas com const
var altura = 1.70;
altura = 1.65;

let preco = 50;
preco = 25;

const possuiComida = true;
possuiComida = false;
// Retorna um erro



// EXERCÍCIOS
// Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas.

// Declarar uma variável com o seu nome
var nome = 'Matheus';

// Declarar uma variável com a sua idade
var minhaIdade = 22;

// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var comidaFavorita;

// Atribuir valor a sua comida favorita
comidaFavorita = 'Morango';

// Declarar 5 variáveis diferentes sem valores
var nomeTime,
    corTime,
    jogadoresTime,
    liderTime,
    funcaoTime
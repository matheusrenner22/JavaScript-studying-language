// FUNÇÕES
// bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.
function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(4)); // 16
console.log(areaQuadrado(5)); // 25
console.log(areaQuadrado(2)); // 4

// chamada de function declaration

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

// Parênteses () executam uma função



// PARÂMETROS E ARGUMENTOS
// ao criar uma função, você pode definir parâmetros.
// ao executar uma função, você pode passar argumentos.

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

console.log(imc(80, 1.80)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.70)); // 60 e 1.70 são os argumentos

// Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também



// PARÊNTESES EXECUTA A FUNÇÃO
function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}

console.log(corFavorita()); // retorna 'Você não gosta de nada'

// se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer.



// ARGUMENTOS PODEM SER FUNÇÕES
// chamadas de callback, geralmente são funções que ocorrem após algum evento.
addEventListener('click', function() {
  console.log('clicou');
});

// a função possui dois argumentos
// primeiro é a string 'click'
// segundo é uma função anõnima

// funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}



// PODE OU NÃO RETORNAR UM VALOR
// quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc(80, 1.80); // retornar imc
console.log(imc(80, 1.80)); // retorna o imc e undefined



// VALORES RETORNADOS
// uma função pode retornar qualquer tipo de dado e até outras funções
function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

// cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.



// ESCOPO
// variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
console.log(totalPaises); // erro, totalPaises não definido



// ESCOPO LÉXICO
// funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro



// HOISTING
// antes de executar uma função, o JS 'move' todas as funções declaradas para a memória
imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}



// EXERCÍCIO

// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(valor) {
  if(valor) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaTruthy(''));
console.log(verificaTruthy(' '));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(valor) {
  return valor * 4;
}

console.log(perimetroQuadrado(2));
console.log(perimetroQuadrado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `Meu nome é: ${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Matheus', 'Renner'));

// Crie uma função que verifica se um número é par
function parOuImpar(numero) {
  if (numero % 2 === 0) {
    console.log(`${numero} é par`);
  } else {
    console.log(`${numero} é impar`);
  }
}

parOuImpar(2);
parOuImpar(7);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado) {
  return typeof dado;
}

console.log(tipoDado('Matheus'));
console.log(tipoDado(200));
console.log(tipoDado(true));
console.log(tipoDado({}));
console.log(tipoDado(undefined));
console.log(tipoDado(null));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function nomeCompleto(nome, sobrenome) {
  console.log(`${nome} ${sobrenome}`);
}

// Para responder aos argumentos da função, precisasse de outra função
// Dentro do event para excutar a função com os argumentos
addEventListener('scroll', () => {
  nomeCompleto('Matheus', 'Renner');
})

// Corrija o erro abaixo - CORRIGIDO
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
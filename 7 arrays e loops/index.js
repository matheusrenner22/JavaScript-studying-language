// ARRAY
// é um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
var videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames[0]; // Switch
videoGames[2]; // Xbox

// acesse um elemento do array utilizando [n]



// MÉTODOS E PROPRIEDADES DE UMA ARRAY
var videoGames = ['Switch', 'PS4', 'Xbox'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona no final do array
videoGames.length; // 3

// existem diversos outros métodos, como map, reduce, forEach e mais que veremos mais á frente



// FOR LOOP
// fazem algo repetidamente até que uma condição seja atingida.
for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}
// Retorna de 0 a 9 no console

// o for loop possui 3 partes, início, condição e incremento



// WHILE LOOP
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console

// O for loop é o mais comum



// ARRAYS E LOOPS
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

// O for loop é o mais comum

 

// BREAK
// o loop irá parar caso encontre a palavra break
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if(videoGames[i] === 'PS4') {
    break;
  }
}



// FOREACH
// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (Ou array-like)
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

videoGames.forEach(function(item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente

// podemos passar os seguintes parâmetros: item, index e array



// NÃO SE CONFUNDA COM A SINTAXE
var numero = 0;
var maximo = 50;

for(; numero < maximo;) {
  console.log(numero);
  numero++;
}

// não aconselho escrever de forma acima, mas funciona normalmente.



// EXERCÍCIO

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var vitoriaCopa = ['1959', '1962', '1970', '1994', '2002'];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
vitoriaCopa.forEach((item) => {
  console.log(`O brasil ganhou a copa de ${item}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (const fruta of frutas) {
  console.log(fruta);

  if (fruta === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var frutaEscolhida = frutas[4];
console.log(frutaEscolhida);
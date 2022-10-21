// Arrays
/**
 * Array, vetor ou arranjo, é uma estrutura amplamente utilizada e implementada em quase todas as lingugens de programação
 * Uma das estruturas mais básicas, simples de criar e utilizar
 */


// Características
/**
 * Acesso pelo index
 * Respeita a ordem de inserção dos elementos
 * Aceita valores duplicados
 * Dependendo do tamanho do Arrays, para encontrar e/ou deletar um elemento, será necessário um uso maior de perfomance
 */

// Arrays no Javascript
/**
 * São dinâmicos
 * Você poderá ter dados de diferentes tipos misturados dentro de um Array. Strings, numbers, booleans, objetos, funções e até outros arrays.
 * Existem muitos métodos já implementados
 */



const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton'];

console.log(pilotos[0]); // Senna
console.log(pilotos[3]); // Hamilton

// acessar o tamanho do array
console.log(pilotos.length);

// iterável
for (let piloto of pilotos) {
    console.log(piloto);
}

// adicionar elementos
pilotos.push('Alonso');
console.log(pilotos);

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna');
console.log(senna);

// deletar elemento
pilotos.slice(1, 1);
console.log(pilotos);
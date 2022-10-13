/**
 * Higher-order function
 * 
 *  - Funções que recebem funções como argumentos
 *  - Funções que poderão retornar outras funções
 */

// Exemplo com .map() JS
var numbers = [2, 4, 8, 16];

var square = n => n * n;

var squaredNumber = numbers.map(square);

// Exemplo de um retorno de função
// (currying ou aplicação parcial de função)
var pause = wait => fn => setTimeout(fn, wait);

pause(600)(() => console.log('waiting 600ms'));

var wait200 = pause(200);
var wait1000 = pause(1000);

wait200(() => console.log('waiting 200ms'));
wait1000(() => console.log('waiting 1s'));
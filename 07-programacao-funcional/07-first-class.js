/**
 * First-class function
 * 
 * - Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
 * - A função poderá ser entendida como uma variável
 */

var sayMyName = () => console.log('Mayk');
var runFunction = fn => fn();

runFunction(sayMyName);
runFunction(() => console.log('discover'));

console.log(runFunction(Math.random));
// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2


// Exemplos

// Café de manhã top
var pao = true;
var queijo = false;

var niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim';

console.log(niceBreakfast);

// Maior de 18
var age = 17;
var canDrive = age >= 18 ? 'can drive' : 'can\'t drive';
console.log(canDrive);
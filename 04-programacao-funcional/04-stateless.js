/**
 * Stateless
 * 
 * - Não guarda estado
 * - A função só conhece dados entregues à ela
 * - A resposta não poderá variar
 */

var number = 2;

// stateful function
function square() {
    return number * number;
}

number = square();

// stateless function
var square = n => n * n;
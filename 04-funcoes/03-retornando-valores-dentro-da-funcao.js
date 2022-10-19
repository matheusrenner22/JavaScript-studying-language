var sum = function(number1, number2) {
    total = number1 + number2;
    return total;
}

var number1 = 34;
var number2 = 25;

// passando as variáveis acima como argumento para função
// sum(number1, number2);

console.log(`A soma é ${sum(number1, number2)}`);

// por não especificar o tipo da variável total, ela pode ser chamada fora do escopo da função apenas depois que a função for executada
console.log(total);

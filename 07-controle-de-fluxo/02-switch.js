// Switch

var expression = 1;

switch (expression) {
    case 'a':
        // codigo
        console.log('a');
        break;
    case 'b':
        // codigo
        console.log('b');
        break;
    case 'c':
        // codigo
        console.log('c');
        break;
    default:
        console.log('default');
        break;
}

function calculate(number1, operator, number2) {
    var result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            console.log('Operador inválido');
            break;
    }

    return result;
}

console.log(calculate(2, '+', 2));
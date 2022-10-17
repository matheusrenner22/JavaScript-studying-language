/**
 * Funções independentes
 * 
 * - Deverá ter ao menos 1 argumento
 * - Deverá retornar algo
 * - Nada que acontecer lá dentro afeta o mundo externo
 *  - dados imútáveis
 *  - não guardar estado
 * - Não faremos uso de loops (for, while), mas se houver necessidade de tal, usaremos recursão (a função chama ela mesma)
 */

var random = (number, Math) => {
    Math.floor(Math.random() * number);
}

// recursive
// Find the factorial of a number
var factorial = x => {
    
    // if number is 0
    if (x === 0) {
        return 1;
    }

    return x * factorial(x - 1);
}

console.log(factorial(60));
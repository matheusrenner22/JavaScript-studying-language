/*
    Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

    C = (F - 32) * 5 / 9
    F = C * 9 / 5 + 32
    
*/

// transformDegree('50F')
function transformDegree(degree) {
    var formula, 
        updateDegree, 
        degreeSign;
        
    var celsiusExists = degree.toUpperCase().includes('C');
    var fahrenheitExists = degree.toUpperCase().includes('F');

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado');
    }

    // fluxo ideal, F -> C
    if (fahrenheitExists) {
        updateDegree = Number(degree.toUpperCase().replace('F', ''));
        formula = fahrenheit => (fahrenheit - 32) * 5 / 9;
        degreeSign = 'C';
    }

    // fluxo ideal, C -> F
    if (celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace('C', ''));
        formula = celsius => celsius * 9 / 5 + 32;
        degreeSign = 'F';
    }

    return formula(updateDegree) + degreeSign;
}

try {
    console.log(transformDegree('50F'));
} catch (error) {
    console.log(error.message);
}
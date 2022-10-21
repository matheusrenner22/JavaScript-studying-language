/*
    Transformar notas escolares

    crie um algoritmo que tranforme as notas do sistema númerico para sistema de notas em caracteres tipo A B C

    * de 90 para cima - A
    * entre 80 - 89 - B
    * entre 70 - 79 - C
    * entre 60 - 69 - D
    * menor que 60 - F
*/

function getScore(score) {
    var scoreA = score >= 90 && score <= 100;
    var scoreB = score >= 80 && score <= 89;
    var scoreC = score >= 70 && score <= 79;
    var scoreD = score >= 60 && score <= 69;
    var scoreF = score < 60;

    var scoreFinal;

    if (scoreA) {
        scoreFinal = 'A';
    } else if(scoreB) {
        scoreFinal = 'B';
    } else if(scoreC) {
        scoreFinal = 'C';
    } else if(scoreD) {
        scoreFinal = 'D';
    } else if(scoreF) {
        scoreFinal = 'F';
    } else {
        scoreFinal = 'Nota inválida';
    }

    return scoreFinal;
}


console.log(getScore(101));
console.log(getScore(-1));
console.log(getScore(0));
console.log(getScore(1));
console.log(getScore(45));
console.log(getScore(60));
console.log(getScore(61));
console.log(getScore(75));
console.log(getScore(85));
console.log(getScore(95));
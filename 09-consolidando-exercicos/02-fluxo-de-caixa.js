/*
    Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

var family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00],
}

function sum(array) {
    var total = 0;

    for (var value of array) {
        total += value;
    }

    return total;
}

function calculateBalance() {
    var calculateIncomes = sum(family.incomes);
    var calculateExpenses = sum(family.expenses);

    var total = calculateIncomes - calculateExpenses;

    var itsOk = total >= 0;
    var balanceText = 'negativo';

    if (itsOk) {
        balanceText = 'positivo';
    }

    console.log(`Seu saldo é ${balanceText}: ${total}`);
}

calculateBalance();
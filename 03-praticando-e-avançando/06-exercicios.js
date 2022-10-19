// 1. declare uma variável de nome weight
var weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight);

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/

var name = 'Matheus';
var age = 22;
var stars = 22.50;
var isSubscribed = true;

/*
    4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substiua <name> <age> e <weight> pelos valrores de cada propriedade do objeto
*/

// var student = {};

// console.log(typeof student);

var student = {
    name: 'Matheus',
    age: 22,
    stars: 22.50,
    isSubscribed: true,
};

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`);


/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

*/

var students = [];


/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students.push(student);
console.log(students);


/*
    7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0]);


/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

var secondStudent = {
    name: 'Gabriel',
    age: 21,
    stars: 21.50,
    isSubscribed: true,
}

students.push(secondStudent);


/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a);
    var a = 1;

    A resposta é undefined, pois ele faz um hoisting que permite que a variável mesmo declarada depois, possa ser imprimida, porém sem seu valor atribuido oque torna ela Undefined. A menos que você imprima depois de declarar ela.
*/
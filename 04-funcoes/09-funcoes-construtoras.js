/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name;
    this.walk = function() {
        return `${this.name} está andando`;
    }
}

var mayk = new Person('Mayk');
var joao = new Person('Joao');

console.log(mayk);
console.log(mayk.walk());

console.log(joao);
console.log(joao.walk());

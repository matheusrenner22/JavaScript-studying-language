/* 
    * Object
        * Objeto
        * Propriedades / Atributos
        * Funcionalidades / Métodos
    
    { propriedade: "valor" }

*/

var person = {
    name: 'Matheus',
    idade: 22,
    acao() {
        return `meu nome é ${this.name} e minha idade ${this.idade}`;
    },
}

console.log(person.name);
console.log(person.idade);
console.log(person.acao());
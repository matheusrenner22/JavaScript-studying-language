/**
 * Composição de funções
 * 
 * - Um encadeamento de funções
 * - Uma função que retorna um dado e vai pra outra função, que retorna um dado e vai pra outra função, que retorna...
 */

var people = ['Rafa', 'Diego', 'Dani', 'Rod'];
var upperCasePeopleThatStartsWithD = people.filter(person => person.startsWith('D'))
.map(dperson => dperson.toUpperCase());

console.log(upperCasePeopleThatStartsWithD);
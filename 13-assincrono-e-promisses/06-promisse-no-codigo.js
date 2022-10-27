/**
 * Promisse
 * 
 * A promessa de que algo irá acontencer
 * Poderá dar certo ou errado,
 * mas irá acontecer
 */

var aceitar = false;

console.log('pedir uber');

var promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('pedido aceito!');
    } else {
        return reject('pedido negado!');
    }
});

console.log('aguardando');

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('Promessa concluída'));
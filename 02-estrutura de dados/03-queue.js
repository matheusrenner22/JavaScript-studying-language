// Queue
/**
 * Tradução de Queue é fila
 * 
 * Como uma fila em uma loja ou restaurante
 *  Linear
 *  O primeiro a entrar na fila é o primeiro a sair
 * 
 * Conceitos
 *  FIFO: First In First Out
 *      O primeiro elemento  a entrar na fila, é o primeiro a sair dela
 *  Front (frente) é a referencia do primeiro elemento a entrar na fila
 *  Back (fundo) é a referência do último elemento a entrar na fila
 * 
 * 
 * Métodos Fundamentais
 *  enqueue(): adicionar um elemento ao final da fila
 *  dequeue(): remover o primeiro elemento a entrar na fila
 * 
 * Outros métodos poderão ser implementados como size() para mostrar o tamanho da fila ou front() para pegar o primeiro elemento da fila, dentre tantos outros.
 */


// Passo 1: Modelando
class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(item) {
        this.data.push(item);
        console.log(`${item} chegou na fila`);
    }

    dequeue() {
        var item = this.data.shift();
        console.log(`${item} saiu da fila!`);
    }
}

// Passo 2: Utilizando
var fila = new Queue();

fila.enqueue('Mariana'); // adicionado mariana
fila.enqueue('Joao'); // adicionado joao
fila.enqueue('Ariel'); // adicionado ariel
fila.dequeue(); // removido mariana
fila.dequeue(); // removido joao
fila.dequeue(); // removido ariel
// Stack
/**
 * Tradução de Stack é pilha
 * Como uma pilha de livros
 * 
 * linear, um após o outro
 * o último a entrar na pilha é o primeiro a sair
 * 
 * 
 * LIFO - Last in First Out
 * O último elemento a entrar na pilha, aquele elemento do topo da pilha, é o primeiro a sair
 * 
 * Métodos fundamentais
 * push(): adicionar um elemento à pilha
 * pop(): remover o elemento do topo da pilha
 * peek(): obter o elemento do topo da pilha
 */


// Passo 1: Modelando uma stack
class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }

    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop() {
        if (this.top < 0) return undefined
        var poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }

    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}


// Passo 2: utilizando
var stack = new Stack();

// adicionar dados
stack.push('learning');
stack.push('data');
console.log(stack.push('structures'));

console.log(stack.peek());

// remover
stack.pop();
console.log(stack.pop());
console.log(stack.peek());
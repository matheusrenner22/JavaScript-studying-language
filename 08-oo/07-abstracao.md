# Abstração
Template ou identidade de uma classe que será consumida no futuro

- Atributos e métodos podem ser criados na classe de Abstração (Superclasse) MAS
- A implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração.

```JS

class Parafuso {
    // Para que não seja instanciada
    constructor() {
        if (this.constructor === Parafuso) {
            throw new Error('Classe abstrata não pode ser instânciada');
        }
    }

    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado');
    }
}

class Fenda extends Parafuso {
    constructor() {
        super();
    }

    get tipo() {
        return 'fenda';
    }
}

class Philips extends Parafuso {
    constructor() {
        super();
    }

    get tipo() {
        return 'philips';
    }
}

const parafuso = new Parafuso(); // Classe abstrata não pode ser iniciada
console.log(parafuso.tipo);

const fenda = new Fenda();
console.log(fenda.tipo);

const philips = new Philips();
console.log(philips.tipo);

```
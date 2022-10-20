# Encapsulamento
Dirigir carro vs conhecer o motor do carro

- Colocar numa cápsula
- Agrupamento de funções e variáveis
- Esconder detalhes de implementação
- Camada de segurança para os atributos e métodos


```JS

// Estrutural
var altura = 50;
var largura = 60;

function calcularArea() {
    return altura * largura;
}

var area = calcularArea();



// Orientada da Objetos

class Poligono {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    get area() {
        return this.#calcularArea(); // o hash na função significa que ele não será visível a fora daqui
    }

    #calcularArea() {
        return this.altura * this.largura;
    }
}

// Criar o objeto
var poligono = new Poligono(50, 60);
console.log(poligono.area);
console.log(poligono.#calcularArea()); // O método não está visível fora da classe poligono.
```
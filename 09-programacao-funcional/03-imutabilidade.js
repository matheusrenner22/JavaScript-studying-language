/**
 * Imutabilidade
 * 
 * - Uma variável não vai variar
 * - Se você precisar mudar uma variável, você não muda, você cria uma nova
 */

// Exemplo em JS
var cart = {
    quantity: 2,
    total: 200,
}

// bad
cart.quantity = 3;

// good
var newCart = {...cart, quantity: 3};

// Exemplo em ReactJS
var [amount, setAmount] = useState(0)

// bad
amount = 2;

// good
setAmount(2);
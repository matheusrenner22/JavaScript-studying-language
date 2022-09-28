// STRING
// é a construtora de strings, toda string possui as propriedades e métodos do prototype de String.
var comida = 'Pizza';
var liquido = new String('Água');
var ano = new String(2018);



// STR.LENGTH
// propriedades com o total de caracteres da string
var comida = 'Pizza';
var frase = 'A melhor comida';

comida.length; // 5
frase.length; // 15

comida[0] // P
frase[0] // A
frase[frase.length - 1] // a



// STR.CHARAT(N)
// retorna o caracter de acordo com o index de (n).
var linguagem = 'JavaScript';

linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t



// STR.CONCAT(STR2, STR3, ...)
// concatena as strings e retorna o resultado.
var frase = 'A melhor linguagem é ';
var linguagem = 'JavaScript';

var fraseCompleta = frase.concat(linguagem, '!!');



// STR.INCLUDES(SEARCH, POSITION)
// procura pela strin exata dentro de outra string. A procura é case sensitive.
var fruta = 'Banana';
var listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false



// STR.ENDSWITCH(SEARCH) E STR.STARTSWITH(SEARCH)
// procura pela string exata dentro de outra string. A procura é case sensitive
var fruta = 'Banana';

fruta.endsWith('nana'); // true
fruta.startsWith('Ba'); // true
fruta.startsWith('na'); // false



// STR.SLICE(START, END)
// corta a string de acordo com os valores de start e end.
var transacao1 = 'Depósito de cliente';
var transacao2 = 'Depósito de fornecedor';
var transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi



// STR.SUBSTRING(START, END)
// Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.
var linguagem = 'JavaScript';
linguagem.substring(3, 5); // aS
linguagem.substring(0, 4); // Java
linguagem.substring(4); // Script
linguagem.substring(-3); // JavaScript



// STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH)
// retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

var instrumento = 'Guitarra';

instrumento.indexOf('r');  // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3



// STR.PADSTART(N, STR) E STR.PADEND(N, STR)
// aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10. ele passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
var listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
});

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.'); // R$ 99.....



// STR.REPEAT(N)
// Repete a string (n) vezes

var frase = 'Ta';
frase.repeat(5); // TaTaTaTaTa



// STR.REPLACE(REGEX|SUBSTR, NEWSTR|FUNCTION)
// troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá tocar apenas o primeiro valor que encontrar.
var listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

var preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200,43'

// veremos mais sobre regular expression



// STR.SPLIT(PADRAO)
// divide a string de acordo com o padrão passado e retorna uma array.
var listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
var arrayItens = listaItens.split(' ');

var htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
var htmlArray = htmlText.split('div');
var htmlNovo = htmlArray.join('section');

// join é um método de Array



// STR.TOLOWERCASE() E STR.TOUPPERCASE()
// retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
var sexo1 = 'Feminino';
var sexo2 = 'feminino';
var sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true



// STR.TRIM(), STR.TRIMSTART(), STR.TRIMEND()
// Remove espaços em branco do início ou final de uma string
var valor = '  R$ 23.00  ';
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00  '
valor.trimEnd(); // '  R$ 23.00'



// EXERCÍCIOS

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

let transacoesSix = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

var totalTaxa = 0;
var totalRece = 0;

transacoesSix.forEach((item) => {
  var numeroLimpo = item.valor.replace('R$ ', '');

  if (item.descricao.slice(0, 4) === 'Taxa') {
    totalTaxa += +numeroLimpo;
  } else {
    totalRece += +numeroLimpo;
  }
});

console.log(totalTaxa.toString().padStart(6, 'R$ '));
console.log(totalRece.toString().padStart(6, 'R$ '));


// Retorne uma array com a lista abaixo
var transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
var arrayLimpo = transportes.split(';');
console.log(arrayLimpo);


// Substitua todos os span's por a's
var html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
var cleanHtml = html.split('span'); // cortou no span e depois fez o join
var finalHtml = cleanHtml.join('a');
console.log(finalHtml);


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.slice(-1));

// Retorne o total de taxas
var transacoesNomes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

var totalTaxaNomes = '';
transacoesNomes.forEach((item) => {
  var nameLower = item.toLowerCase();

  if (nameLower.includes('taxa')) {
    totalTaxaNomes += nameLower;
  }
});

console.log(totalTaxaNomes);
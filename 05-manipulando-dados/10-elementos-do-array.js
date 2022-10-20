// Manipulando Arrays


// Acessando cada posição do array pelo console.log
console.log([
    'a',
    { type: 'array' },
    function() { return 'alo' }
][0]);

console.log([
    'a',
    { type: 'array' },
    function() { return 'alo' }
][1].type);

// Para executar a função na posição do index, precisa passar os parenteses
console.log([
    'a',
    { type: 'array' },
    function() { return 'alo' }
][2]());

// Contar elementos de um array
console.log(['a', 'b', 'c'].length);
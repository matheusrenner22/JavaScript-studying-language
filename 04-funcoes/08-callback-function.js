// callback function
function sayMyName(name) {
    console.log('antes de executar a função callback');

    // por o argumento ser uma função, para chamar a função como argumento, é necessário passar aqui o parâmetro como uma função e assim ela será executada a callback e depois a função principal será executado o último trecho de código
    name()

    console.log('depois de executar a callback');
}

sayMyName(
    () => {
        console.log('Estou em uma callback');
    }
);



// callback function com parâmetro
function sayMyName2(name) {
    console.log('Antes de executar a função callback');

    name('Matheus');

    console.log('Depois de executar a função callback');

}

sayMyName2(
    (person) => {
        console.log(`Hello my name is ${person}`);
    }
);
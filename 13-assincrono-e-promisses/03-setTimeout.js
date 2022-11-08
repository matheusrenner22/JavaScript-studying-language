// setTimeout(function, delay);

setTimeout(function sayHello() {
    console.log('Hello World');
}, 1000);


// setTimeout com função criada externamente

function sayHello2() {
    console.log('Hello World 2');
}

setTimeout(sayHello2, 2000);
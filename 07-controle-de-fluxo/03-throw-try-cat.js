// throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error('Nome é obrigatório');
    }

    console.log('depois do erro');
}

sayMyName();

// try...catch
try {
    sayMyName();
} catch (error) {
    console.log(error);
}

console.log('após o try catch');
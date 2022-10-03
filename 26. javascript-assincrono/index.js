// PROMISSE

// Criando a promessa 
// Passando uma função com dois parâmetros de resolve e reject
// Se a condição for true, cabe o resolve, ser executado, caso n... o reject com Erro, será ativado
// Caso o resolve seja ativado, o .then() é chamado e uma função de callback para mostrar o conteúdo dor esolve, será executada.
var promessa = new Promise((resolve, reject) => {
  var condicao = true;

  if (condicao) {
    resolve({ nome: 'Matheus', sobrenome: 'Renner', idade: 22, });
  } else {
    reject(Error('Um erro ocorreu na promise'));
  }
});

promessa.then((resolucao) => {
  console.log(resolucao);
});



// PROMISSE COM SET TIMEOUT
var promessa = new Promise((resolve, reject) => {
  var condicao = true;

  if (condicao) {
    setTimeout(() => {
      resolve({ nome: 'Matheus', sobrenome: 'Renner', idade: 22, });
    }, 1000);
  } else {
    reject(Erro('Um erro ocorreu na promise'));
  }
});

var retorno = promessa.then(resolucao => {
  console.log(resolucao);
});

console.log(retorno);



// PROMISSE com setTimeout e encadeamento de .then() simplificado
var promessa = new Promise((resolve, reject) => {
  var condicao = true;

  if (condicao) {
    setTimeout(() => {
      resolve({ nome: 'Matheus', sobrenome: 'Renner', idade: 22, });
    }, 1000);
  } else {
    reject(Error('Um erro ocorreu na promise'));
  }
});

// Encadeamento de .then()
var retorno = promessa
.then(resolucao => {
  console.log(resolucao);
  resolucao.profissao = 'Programador';
  return resolucao;
})
.then(resolucao => {
  console.log(resolucao);
}).catch(rejeitado => {
  console.log(rejeitado);
});

console.log(retorno);

// Encadeamento de .then() simplificado e finally
var retorno = promessa
.then(resolucao => {
  console.log(resolucao);
}, rejeitado => {
  console.log(rejeitado);
}).finally(() => {
  console.log('Acabou');
});

console.log(retorno);



// Promisse.all
var login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário Logado');
  }, 1000);
});

var dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados carregados');
  }, 1500);
});

var carregouTudo = Promise.all([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});


// Promisse.race

var carregouTudo = Promise.race([login, dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
});
var promessa = new Promise((resolve, reject) => {
  var condicao = false;

  if (condicao) {
    setTimeout(() => {
      resolve({ nome: 'Matheus', sobrenome: 'Renner', idade: 22, });
    }, 1000);
  } else {
    reject(Error('Um erro ocorreu na promise'));
  }
});

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
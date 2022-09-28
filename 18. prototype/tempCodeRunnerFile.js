function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.nomeCompleto = () => {
    return `${this.nome} ${this.sobrenome}`;
  };
}

var pessoa = new Pessoa('Matheus', 'Renner', 22);
console.log(pessoa.nomeCompleto());
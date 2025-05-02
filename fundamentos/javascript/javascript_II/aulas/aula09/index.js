let pessoa = {
    nome: "gabriel",
    idade: 23,
    dezerOla() {
        console.log(`Ola mundo! Meu nome é ${this.nome} `);
    },
};
console.log(pessoa);
pessoa.dezerOla();

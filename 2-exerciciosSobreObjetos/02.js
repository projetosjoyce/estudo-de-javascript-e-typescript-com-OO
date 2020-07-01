/*
02
- Crie um objeto Pessoa, que tem uma propriedade nome;
- Crie um método que exibe o nome do objeto Pessoa;
*/

let Pessoa = { //obj
    nome: ' Joyce', //prop
    exibirNome() { //metodo 
        console.log('O nome é ' + this.nome);
    }
}

Pessoa.exibirNome(); //exc metodo 
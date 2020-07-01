/*
************* Funções que retornam Objetos **************
- Parecida com as constructor functions, porém não precisamos utilizar o new;
- O objeto é criado com o retorno da função;
*/

function criarPessoa(nome) {
    return {
        nome:nome
    };
}


let pessoa1 = criarPessoa('Matheus');
let pessoa2 = criarPessoa('João');

console.log(pessoa1.nome);
console.log(pessoa2.nome);
/* INTERFACES 
- Interface é a possibilidade de criar uma função que recebe argumentos específicos e os utiliza conforme usa lógica
- Podemos criar interfaces com parâmetros opcionais tbm
*/

function imprimirNome( obj: { nome: string }) {
    console.log(obj.nome);
}

let pessoa = { nome: 'Joyce', idade: 29};
imprimirNome(pessoa);

//Exemplo 01

interface config {
    nome?:string;  // ? significa que é opcional
    idade?: number; // ? significa que é opcional
}

function criarPessoa(config: config): {nome:string; idade:number} {
    let pessoa = { nome: 'nao informado', idade:0}

    if (config.nome) {
        pessoa.nome = config.nome;
    }

    if (config.idade) {
        pessoa.idade = config.idade;
    }

    return pessoa;
}

let joao = criarPessoa({ nome: 'Joao'});

console.log(joao);

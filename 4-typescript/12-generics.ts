/* Generics
- Uma forma de criar componentes sem um tipo especifico com a possibilidade de reutilização
- Cria-se um placeholder de um type que será preenchido na execução
*/

function identity<T>(arg: T): T {
    console.log(typeof arg)
    return arg;
}

console.log(identity('asd'));
console.log(identity(1));


//Exemplo 01:

function identity2<T>(arg: T): T {
    console.log(typeof arg)
    return arg;
}

console.log(identity2<number>('asd')); // sinalizacao de erro
console.log(identity2<number>(1));
/*
************* Destructuring ******************
- Veio do ES6
- Podemos criar várias variáveis com uma linha só, desestruturando um objeto;
- Mudar valor de var já criadas
- Funciona com Arrays
*/

let config = {
    ip: '127.0.0.1',
    port: '80',
    blocked: true,
}

let {ip, port, blocked} = config; //transferi os valores do obj para essas variaveis com os msm nome das propriedades do js

console.log(ip);
console.log(port);
console.log(blocked);


//Exemplo 02

let carro = {
    portas: 4,
    aro: 20,
    tetoSolar: true,
    banco: 'couro',
}

let {portas,aro,tetoSolar,banco} = carro;
console.log(portas);
console.log(aro);
console.log(tetoSolar);
console.log(banco);

//Exemplo 03: - Mudar valor de var já criadas

let carro1 = {
    portas: 4,
    aro: 20,
    tetoSolar: true,
    banco: 'couro',
}

let portas2 = 0;

({portas2} = carro1)

console.log(portas);

//Exemplo 04: - Funciona com Arrays

let numeros = [1,2,3];
const [num1,num2,num3] = numeros;

console.log(num1,num2,num3);
/*
************propriedades***************
- As propriedades são as características dos objetos;
- Por ex: cor, portas, nome, marca e etc;
- Podemos iniciar um objeto com várias propriedades;
- E acessá-las para resgatar os seus valores;
*/

//Exemplo 01: criar um objeto carro com propriedades e acessá-las

let carro = { //obj carro
    portas: 4,  //propriedade = características
    cor: "vermelha" //propriedade = características
}

console.log(carro.portas) // acessei a propriedade portas do objeto carro. [resultado no console foi 4]
console.log('Número de portas:',carro.portas, 'usando vírgula');
console.log('Número de portas: '+ carro.portas +' usando adicao');
// ambos aparecem na tela tanto com , ou + 


//Exemplo 02: criar um objeto nome e saber qual o tamanho da propriedade que está no objeto nome

let nome = {
    pessoa: 'Ana Maria de Souza'
}

console.log(nome.pessoa.length) //length é uma propriedade para saber o tamanho de um string ou array[ele conta os espaços]


//Exemplo 03: criar um objeto idade que se a propriedade pessoa tiver mais de 18 anos pode dirigir se não está impossibilitado de dirigir

let idade = {
    pessoa: 18
}

console.log(idade);
if(idade.pessoa >= 18 ) {
    console.log('Está habilitado para dirigir');
}


//Exemplo com um menor de idade

let idade02 = {
    pessoa02: 17
}

console.log(idade02);
if( idade02.pessoa02 < 18 ) {
    console.log('Não autorizado, você não possui a idade necessária')
}
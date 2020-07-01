/*
**************** Objetos **************************
 # O que é um Objeto?
 Um tipo de dado que possui duas características
 PROPRIEDADES = características do Objeto
 MÉTODOS = ações do objeto 

 # Como criar um Objeto?
 - No javascript podemos criar um objeto abrindo e fechando chaves;
 - O Objeto parece com um array de chave e valor; só que array é [] já o obj é {}
 - Podemos atribuir o objeto a uma variável;
 */

// Array Ex: let carro = ['a','b'];

 //Exemplo 01: criar um objeto carro com uma propriedade

 let carro = {   //objeto carro
     portas: 4,  //propriedade
     cor: "Vermelha" //propriedade
 }

 console.log(carro);
 console.log(typeof carro); //esse typeof é para saber o tipo


 //Exemplo 02: criar um objeto pessoa com propriedade nome, idade, sexo, profissão

 let pessoa = {
     nome: "Joyce",
     idade: 27,
     sexo: "Feminino",
     profissao: "Programador"
 }

 console.log(pessoa);
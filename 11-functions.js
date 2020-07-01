/*
************* Functions *******************
- Uma outra forma de criar objeto é pelo constructor function;
- Uma grande vantagem, é que este método aceita parâmetros para o obj;
*/

function Pessoa(nome) {  //função com letra Maiuscula
    this.nome = nome;
}

let pessoa1 = new Pessoa('Matheus');
let pessoa2 = new Pessoa('João');

console.log(pessoa1.nome);
console.log(pessoa2.nome);


//Exemplo 2  - acrescentar ninja no obj já existente

function Ninja(nome, arma) {  //na função posso passar parametros 
    this.nome = nome;
    this.arma = arma;
    this. atiraArma = function() {
        console.log('Atirou a ' + this.arma)
    };
}

//ACRESCENTANDO NINJA 01
let ninja1 = new Ninja('Naruto', 'shuriken'); // vai trazer as prop do obj Ninja passei 2 parametros
console.log(ninja1.nome); // add nome Naruto no obj ninja principal "01" 
ninja1.atiraArma(); //shuriken

//ACRESCENTANDO NINJA 02
let ninja2 = new Ninja('Maria', 'Pistola'); // criei um novo obj passando os 2 parâmetros
console.log(ninja2.nome);
ninja2.atiraArma();


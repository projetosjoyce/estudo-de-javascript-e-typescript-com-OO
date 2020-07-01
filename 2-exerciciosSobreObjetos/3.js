/*
03
- Crie um objeto Ninja por constructor function
- Com a propriedade de nome do ninja e o método atirarShukiren;
*/

function Ninja(nome) {
    this.nome = nome;
    this.atirarShuriken = function () {
        console.log('O ninja atirou a shuriken!')
    }
}

let naruto = new Ninja ('Naruto');

console.log(naruto);
/*
************* This ************************
- A palavra reservada this dentro de um objeto, vai se referir a própria instância;
- Podemos utilizar para resgastar as propriedades de um método;
*/

let pessoa = { //obj
    nome: 'Joyce', //propriedade
}

pessoa.idade = 29; //propriedade

pessoa.falar = function() {
    console.log('Olá, eu tenho ' + this.idade + ' anos');
}

pessoa.falar(); //metodo 


// Exemplo 2:

let ninja = {
    classe: 'profissional',
    arma: 'shuriken',
    atirarArma: function() {
        console.log('Atirou a ' + this.arma);
    }
}

ninja.atirarArma();
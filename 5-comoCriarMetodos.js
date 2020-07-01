/*
Como criar Métodos
- Os Métodos são as ações dos objetos;
- Podemos ter métodos de resgatar propriedades do objeto ou modificar o valor delas
*/

//Exemplo 01:

const robo = { //obj robo
    bracos: 4, //propriedade
    pernas: 2, //propriedade
    arma: 'metralhadora', //propriedade
    armaEspecial: 'foguete', //propriedade
    atirar: function(){   //function 
        console.log('pew pew pew');
    }
}

console.log(robo) // mostrando todas as propriedades do objeto robo
robo.atirar(); //chamando o metodo atirar 


//Exemplo 02:

let pessoa = {
    nome: 'Joyce',
    falar: function() {
        console.log('Oi, blz?')
    }
}

pessoa.falar();
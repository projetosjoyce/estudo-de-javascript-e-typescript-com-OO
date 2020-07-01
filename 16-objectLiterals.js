/*
************* Object Literals ************************
- Função do ES6 que permite criar objetos mais rapidamente;
- Utilizando nomes de variaveis para nomes de propriedades;
- Também não precisamos declarar function para métodos no ES6;
*/

let x = 1;
let y = 2;

let obj = {x,y};

console.log(obj.x);

//exemplo 02:

let megazord = { //obj 
    nome: 'Megazord',  //prop
    arma: ' espada laser', //porp
    explodirTudo() { //function
        console.log('BOOM!!');
    }
}

megazord.explodirTudo(); //metodo 
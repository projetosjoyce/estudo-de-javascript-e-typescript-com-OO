/*
************ criando mais métodos ******************
- Os Métodos podem realizar qualquer operação que uma função realiza;
*/


//Exempo 01:

let pessoa = {  //obj pessoa
    nome: 'Joyce',  //propriedades
    getNome: function() { //trás o nome do objeto
        console.log(" O nome é " + this.nome);
    },
    setNome: function(novoNome) {  //altera o nome do objeto
        this.nome = novoNome;
    }
}

pessoa.getNome(); //joyce
pessoa.setNome(' Maria');
pessoa.getNome(); //Maria


//Exemplo 2:

let aluno = { //obj aluno
    curso: 'Enfermagem',
    periodo: 3,
    superior: function() {
        console.log('Concluindo');
    },

    aumentarPeriodo() {
        this.periodo += 1;
    }
}

aluno.aumentarPeriodo();
console.log(aluno.periodo); // 4
aluno.aumentarPeriodo();
console.log(aluno.periodo); // 5

//Exemplo 3

let pessoa2 = {
    nome: 'Joyce',
    idade: 29,
    falar: function() {
        console.log('Oi, meu nome é Joyce');
    },

    aniversario() {
        this.idade +=1;
    },

    dizerIdade() {
        console.log(' A minha idade é ' + this.idade)
    }
}

pessoa2.aniversario();
console.log(pessoa2.idade);  //30
pessoa2.aniversario();
console.log(pessoa2.idade);  //31
pessoa2.dizerIdade(); // a minha idade é 31


//Exemplo 4 calculadora para somar dois números

let calculadora = {  //obj
    numeros: 0,  //propriedade
    somar: function(a,b) {  //função com os argumentos
        this.numeros = a + b; 
    }
}


calculadora.somar(2,4);  // 2+4
console.log('O resultado é: ' + calculadora.numeros); // 6

/*
*************** Tipos de dados e Propriedades ***********
- As propriedades aceitam qualquer tipo de dados do javascript;
- Booleanos, numbers, strings e arrays
*/

let carro = {  //objeto
    portas: 4, // propriedade - number
    cor: "verde", // propriedade - string
    opcionais: [ // propriedade - array
        "teto solar", "blindagem", "ar condicionado"
    ],
    revisado: true // propriedade - boolean
}

console.log(carro);
console.log(carro.portas);
console.log(carro["cor"]);
console.log(carro.opcionais);
console.log(carro.revisado);


//Exemplo 02:

let maquina = { //obj maquina
    material: "Aço inox",    //string
    equipamentos: ['motor', 'freio', 'esteira', 'cilindro'],  //array
    vaiMontada: false, //boolean
    numeroDeMotores:1, //number
};

console.log(maquina); //aqui tenho o objeto inteiro
console.log(maquina.material)
console.log(maquina.equipamentos)
console.log(maquina.vaiMontada)


//Exemplo 03:

let estado = {  //obj

    estados: [    //array
        'Rio de Janeiro',
        'São Paulo',
        'Recife',
        'Espirito Santo',
        'Amazônas',
        'Brasilia',
        'Pernambuco',
        'Rio grande do Sul',
        'Minas Gerais',
        'Acre',
        'Mato Grosso',
        'Paraíba'
    ],
}

//for para mostrar todos os estados 
for ( let i =0; i < estado.estados.length; i++ ) {
    console.log(estado.estados[i]);
}
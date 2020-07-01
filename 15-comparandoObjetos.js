/*
************* Comparando Objetos ************************
- Você só consegue ter objetos iguais, criando uma referência;
- Objetos criados a partir de um construtor, sempre serão diferentes;
*/


function Robo(nome, arma) {
    this.nome = nome;
    this.arma = arma;
}

let robo1 = new Robo('teste', 'resolver');
let robo2 = new Robo('teste', 'resolver');
console.log(robo1 === robo2); //false pq para js é diferente só fica true se a referencia for igual

let robo3 = robo1; //robo3 é referencia robo 1 por isso true 
console.log(robo1 === robo3); //true

//isso funciona tbm para dar true
let referencia = robo2;
console.log(referencia === robo2); //true
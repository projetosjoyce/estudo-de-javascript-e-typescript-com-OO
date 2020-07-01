/*
************* Passando Referência de Objeto ***************
- Quando você atribui um obj já criado para uma outra variável, você só está passando uma referência;
- Se alterar a referência, o original também é alterado;
*/

let obj = {  //obj
    teste:1, //propriedade
}

let copia = obj; //tenho obj let obj
copia.teste = 2;    // seria "obj.copia" copia tem o obj e chamei a var teste que está em obg que era 1
// alterei a referência e o original mudou tbm 

console.log(obj.teste); // 2
console.log(copia.teste) // 2


//Exemplo 2

let meuObjeto = {
    texto: "valor deste obj é 5"
}

console.log(meuObjeto.texto) // "valor deste obj é 5"

// agora vou criar uma variavel que vou atribuir o obj e vou mudar o valor
let alterandoValorDoObj = meuObjeto;

alterandoValorDoObj.texto = "mudei o valor original para 10";
console.log(meuObjeto.texto)  // "mudei o valor original para 10";
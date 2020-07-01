/*
************* Comparando Objetos *****************
- Podemos comparar os objetos com o método is 
- Teremos basicamente os mesmos resultados de ===
- Salvo para NaN com NaN e +0 com -0 que neste método são considerados como iguais
*/

//Exemplo 01:

let teste = {
    a:1,
}

let teste2 = {
    a:1,
}

console.log(Object.is(teste, teste2));  //false

let teste3 = teste;
console.log(Object.is(teste, teste3));  //true

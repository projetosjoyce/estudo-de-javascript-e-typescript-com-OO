/*
************* Copiando Propriedades ************
- Os Obj herdam métodos do obj pai Object, e podemos utilizá-los;
- Para copiar propriedades utilizamos o método assign
*/

let robo1 = {
    arma: 'lança granada',
}

let robo2 = {

}

Object.assign(robo2,robo1); // copio as propriedades de um obj para outro 
//bobo2 obj das propriedades e robo1 obj que quero copiar 

console.log(robo2);


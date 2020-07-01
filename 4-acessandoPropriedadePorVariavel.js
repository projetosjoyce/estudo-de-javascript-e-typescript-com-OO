/*
*************** Acessando a Propriedade por Variável ***********
- Podemos acessar uma propriedade por meio de uma variável;
- É importante que a variável contenha o texto da propriedade;
*/

const robo = {
    bracos: 4,
    pernas: 2,
    arma: 'metralhadora',
    armaEspecial: 'foguete',
}

let a = 'arma'; //variavel está acessando propriedade arma que é metralhadora

console.log(robo[a]); //metralhadora
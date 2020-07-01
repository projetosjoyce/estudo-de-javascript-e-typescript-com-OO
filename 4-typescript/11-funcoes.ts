/* FUNÇÕES 
- Podemos adicionar os tipos a parâmetros de funções tbm assim nosso código ficará mais seguro
- As funções tbm acc parÂmetros opcionais
*/

function somar(x: number, y:number): number {
    return x+y;
}

console.log(somar(5,6)); //11
console.log(somar(5,'5')); //55


//exemplo 01

function bemVindo(saudacao?: string, nome:string) {
    if(saudacao) {
        console.log(`Olá ${saudacao} ${nome}`);
    } else {
        console.log(`Olá ${nome}`);
    }
}

bemVindo('Sr', 'Matheus');
bemVindo(undefined, 'Lucas');
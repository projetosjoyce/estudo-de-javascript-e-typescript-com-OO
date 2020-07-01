/* CLASSES
- Uma outra grande funcionalidade do TS são as classes que utilizam a ideia da versão ES6 do JS e não a herança pro prototype
*/

class Carro {
    marca: string;
    aro: number;
    constructor(marca: string, aro:number) {
        this.marca = marca;
        this.aro = aro;
    }

    verificaAro() {
        return `O aro do carro é: ${this.aro}`;
    }
}

let ferrari = new Carro('Ferrari', 20);
console.log(ferrari);

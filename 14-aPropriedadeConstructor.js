/*
************ A propriedade constructor ******************
- Quando um objeto é criado, sempre uma propriedade constructor é adicionada a ele;
- Contendo a referência de como o objeto foi criado;

Construtor: Um construtor é uma função que inicializa um objeto. Em JavaScript, os construtores são mais semelhantes ao construtor java normal.

Construtor de objeto: No JavaScript, há uma função especial de construtor conhecida como Object () que é usada para criar e inicializar um objeto. O valor de retorno do construtor Object () é atribuído a uma variável. A variável contém uma referência ao novo objeto. Precisamos de um construtor de objetos para criar um "tipo" de objeto que possa ser usado várias vezes sem redefinir o objeto todas as vezes.

Exemplo:

função GFG (A, B, C) {
    this.g = A;
    this.f = B;
    this.gg = C;
}
Aqui, GFG é o nome do construtor e A, B, C são os argumentos do construtor.

Instanciando um Construtor de Objetos: Existem duas maneiras de instanciar um construtor de objetos,

1. var object_name = new Object (); ou  
   var object_name = new Object ("java", "JavaScript", "C #");
2. var object_name = {};
No 1º método, o objeto é criado usando uma nova palavra-chave, como linguagens OOP normais, e “Java”, “JavaScript”, “C #” são os argumentos passados ​​quando o construtor é chamado.
No segundo método, o objeto é criado usando chaves "{}" .

*/

function  newObj(x) {
    return {
        x: x
    };
}

let y = newObj(1);

function NewObjTwo(x) {
    this.x = x;
}

let z = new NewObjTwo(2);

console.log(y.constructor);
console.log(z.constructor);
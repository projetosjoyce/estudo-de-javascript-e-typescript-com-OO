let pessoa = {
    nome: 'Joyce',
}

pessoa.idade = 29;

pessoa.falar = function() {
    console.log('Olá');
}

delete pessoa.idade; //excluiu idade
delete pessoa.falar; //excluiu falar 

console.log(pessoa);
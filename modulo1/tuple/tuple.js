"use strict";
//Tuplas
let pessoa;
pessoa = ['lucas', 'centro', 25];
console.log(pessoa);
//Tuplas com labels
let pessoa2 = ['lucas', 'centro', 25];
console.log(pessoa);
//Com spreed 
let frutasV = ['maca', 'banana', 'manga'];
console.log(frutasV);
//Tupla heterogênea
let frutasV2 = [true, 1, ...frutasV];
console.log(frutasV2);
//Uso em funções
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let result = listarPessoas(['Lucas'], [24]);
console.log(result);
//na função, eu posso passar uma das tuplas
// e retornar como spreed operator
function pessoasList(...nome) {
    return [...nome];
}
console.log(pessoasList('Lucas', 'Sarmento'));
console.log(pessoasList('Lucas', 'Abrantes', 'Sarmento'));

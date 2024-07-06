//Tuplas

let pessoa:[string, string, number];

pessoa = ['lucas', 'centro', 25];

console.log(pessoa);

//Tuplas com labels

let pessoa2:[nome:string, endereco:string, numero:number] = ['lucas', 'centro', 25];

console.log(pessoa);

//Com spreed 
let frutasV:[string, ...string[]] = ['maca', 'banana', 'manga'];
console.log(frutasV);

//Tupla heterogênea

let frutasV2:[boolean,number, ...string[]] = [true, 1, ...frutasV];
console.log(frutasV2);


//Uso em funções


function listarPessoas(nomes:string[], idades:number[]){
    return [...nomes, ...idades];
}

let result = listarPessoas(['Lucas'], [24]);
console.log(result);

//Labeled com spreed operator

type Nome = [primeiroNome: string, sobrenome: string]  
            | [primeiroNome: string, nomeMeio:string, sobrenome: string]


//na função, eu posso passar uma das tuplas
// e retornar como spreed operator
function pessoasList(...nome:Nome){
    return [...nome];
}

console.log(pessoasList('Lucas', 'Sarmento'));
console.log(pessoasList('Lucas', 'Abrantes', 'Sarmento'));
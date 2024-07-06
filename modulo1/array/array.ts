//exemplo 1

let frutas: string[] = ['maca', 'banana'];
console.log(frutas[0]);

//exemplo 2. Forma mais utilizada

let carros: Array<string> = ['fiat', 'camaro'];
console.log(carros[1]);
carros.push('fusca');
console.log(carros);
console.log(carros.length);

//exemplo 3. Spreed Operator

let formaNum:Array<number> = [1,2,3,4,5,6];
console.log(formaNum);
formaNum = [ ... formaNum, 7,8,9,10];
console.log(formaNum);


//exemplo 4

let lingaugensArray: string[] = new Array('portugues', 'frances', 'italiano');

function lingua(lingaugens:string[]){
    for(let i = 0;i < lingaugens.length; i++){
        if(lingaugensArray[i] === 'frances'){
            console.log('parou');
            break;
        }
        console.log(lingaugensArray[i]);
    }
}

lingua(lingaugensArray);

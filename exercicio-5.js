var foraVar = 'Fora do bloco';

if (true) {
    var dentroVar = 'Dentro do bloco';
    console.log(foraVar); // retorna 'Fora do bloco'
    console.log(dentroVar); // retorna 'Dentro do bloco'
}

console.log(foraVar); // retorna 'Fora do bloco'
console.log(dentroVar); // retorna 'Dentro do bloco'

/////////////////////

let foraLet = 'Fora do bloco';

if (true) {
    let dentroLet = 'Dentro do bloco';
    console.log(foraLet); // retorna 'Fora do bloco'
    console.log(dentroLet); // retorna 'Dentro do bloco'
}

console.log(foraLet); // retorna 'Fora do bloco'
//console.log(dentroLet); // erro 'dentro is not defined'
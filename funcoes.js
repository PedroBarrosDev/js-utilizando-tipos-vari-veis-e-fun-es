// parametros/argumentos
// retorno

function exibeInfosEstudante(nome, nota) {
    return `o nome é ${nome} e a nota é ${nota}`
}

console.log(exibeInfosEstudante('Caroline', 10))
console.log(exibeInfosEstudante('Ana', 7))

// declaração da função
function somarDoisNumeros(numA, numB) {
    return numA + numB;
}
   
// execução (ou chamada) da função
somarDoisNumeros(2, 2);
   
// atribuindo o retorno de uma função a uma variável
const resultado = somarDoisNumeros(2, 2);

console.log(resultado);   

function dividir(dividendo, divisor) {
    return dividendo / divisor;
}
   
const resultado2 = dividir(10, 2);

console.log(`o resultado é ${resultado2}`); // o resultado é 5
   
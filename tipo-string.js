const sobrenome = "Barros"
const nome = `Pedro ${sobrenome}`

const senha = 'SenhaSegura123' + nome.toUpperCase();

console.log(senha)
console.log(nome)

const teste = "8.1"
console.log(Number(teste))
const teste2 = "8.9"
console.log(parseFloat(teste2))

//As funções parseInt() e parseFloat() funcionam de forma similar a Number(), porém convertem apenas strings,
//enquanto Number() é capaz de converter outros tipos de dados conforme os exemplos acima.

+'45' // retorna o número 45
+true // retorna o número 1
+false // retorna o número 1
+49 // retorna o número 49

console.log(+49)
console.log(+true)
console.log(+false)

console.log(typeof +'45'); // retorna ‘number’
console.log(typeof +true); // retorna ‘number’

String(2); // retorna '2'
String(undefined); // retorna 'undefined'
String(true); // retorna 'true'

//Determina se um conjunto de caracteres pode ser encontrado dentro de uma string, retornando true ou false:

'estudando JavaScript'.includes('Java'); // retorna true

const texto = 'estudando JavaScript';
texto.includes('Java'); // retorna true

//Converte todos os caracteres da string para letras minúsculas.

'POR FAVOR, NÃO GRITE'.toLowerCase(); // retorna 'por favor, não grite'

const texto1 = 'POR FAVOR, NÃO GRITE';
texto.toLowerCase(); // retorna 'por favor, não grite'

//Da mesma forma que existe um método para transformar textos em minúsculas, 
//também é possível usar texto.toUpperCase() para converter em maiúsculas.
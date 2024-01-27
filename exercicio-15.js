const num1 = 2
const num2 = 4
const num3 = 4

function maiorQue(numero1, numero2, numero3) {
    if (numero1 == numero2 && numero1 == numero3){
        console.log('São todos iguais!')
    }else if (numero1 >= numero2 && numero1 >= numero3) {
        console.log(`o maior numero é ${numero1}`)
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        console.log(`o maior numero é ${numero2}`)
    } else if (numero3 >= numero1 && numero3 >= numero2) {
        console.log(`o maior numero é ${numero3}`)
    }
}
maiorQue(num1, num2, num3);
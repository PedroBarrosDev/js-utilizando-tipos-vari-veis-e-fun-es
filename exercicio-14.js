function reverseString(str) {

    let splitString = str.split("");

    let reverseArray = splitString.reverse(); 
    let joinArray = reverseArray.join(""); 

    return joinArray; 
}

let palavra = "ana"

let ehPalindromo = reverseString(palavra)
 
if(palavra == ehPalindromo){
    console.log("Verdade")
}else {
    console.log("Mentira")
}
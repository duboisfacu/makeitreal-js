/*
Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. 
Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"
*/

num = parseInt(Math.random() * 10)

let num2 = prompt('Ingrese un número:')
if (num === num2){
    console.log("Felicitaciones, ese era!")
}
else{
    console.log("Lo siento, intenta nuevamente!")
}
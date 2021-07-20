/* 
Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:

Ingresa una frase> esta es una prueba
Esta Es Una Prueba
*/

const frase = prompt("Ingrese una frase:")
let array = frase.split(" ")
let array2= []
for (a in array){
    primera = array[a].slice(0,1).toUpperCase()
    resto = array[a].slice(1, array[a].length)
    array2[a] = (primera + resto)
}
console.log(array2.join(" "))

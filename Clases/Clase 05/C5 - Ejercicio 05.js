/* 
Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva línea. Por ejemplo:

Ingresa una frase> esta es una prueba
esta
es
una
prueba
Nota: Las palabras se separan por espacio.
*/

const frase = prompt("Ingrese una frase:")
let array = frase.split(" ")
for(palab in array){
    console.log(array[palab])
}
wh
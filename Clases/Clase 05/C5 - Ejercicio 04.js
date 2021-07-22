/* 
Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:

Ingresa una frase> esta es una prueba
Esta Es Una Prueba
*/

let frase = prompt("Ingrese una frase:").split(" ")

for (a in frase){
    frase[a] = (frase[a].slice(0,1).toUpperCase() + frase[a].slice(1, frase[a].length))
}
console.log(frase.join(" "))
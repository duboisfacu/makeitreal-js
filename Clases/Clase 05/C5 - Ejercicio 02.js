/* 
Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay en la frase. Por ejemplo:

Ingresa una frase> Hasta la próxima
La frase tiene 4 caracteres "a"
*/

frase = prompt("Ingrese una frase:")

let count = 0
for (let a in frase){
    if (frase[a] == "a"){
    count++
    }
}
console.log(`La frase tiene ${count} caracteres "a"`)
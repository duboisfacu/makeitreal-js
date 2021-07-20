/* 
Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común. 
Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".

Ejemplo 1:

Ingresa frase 1> German
Ingresa frase 2> Gabriela
Los caracteres en común son: G, e, r, a
Ejemplo 2:

Ingresa frase 1> Hola
Ingresa frase 2> Bye
No se encontraron caracteres en común
*/

const frase1 = prompt("Ingrese una frase:")
const frase2 = prompt("Ingrese otra frase:")
let matches = []
for (letra in frase1){
    for (letra2 in frase2){
        if ((frase1[letra] === frase2[letra2]) && (matches.includes(frase1[letra]) === false)){
                matches.push(frase1[letra]) 
            }
        }
    }

if (matches.length > 0){
    console.log(`Los caracteres en común son: ${matches.join(", ")}`)
}
else{
    console.log(`No se encontraron caracteres en común`)
}w
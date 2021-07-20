/* 
Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter "a" por "4".
Reemplaza el caracter "e" por "3".
Reemplaza el caracter "i" por "1".
Reemplaza el caracter "o" por "0".
Ejemplo:

Ingresa una frase> esta es una prueba
3st43sun4pru3b4
Nota: Aunque esta es una forma de generar contraseñas no se considera segura y no la recomendamos.
*/

const frase = prompt("Ingrese una frase:").toLowerCase()
let frase2 

frase2 = frase.replaceAll(" ", "")
frase2 = frase2.replaceAll("o", "0")
frase2 = frase2.replaceAll("i", "1")
frase2 = frase2.replaceAll("e", "3")
frase2 = frase2.replaceAll("a", "4")

console.log(frase2)
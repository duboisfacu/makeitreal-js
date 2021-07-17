/*
Escribe un programa que:

Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
Elimine el segundo elemento.
Recorra e imprima el arreglo.
Ejemplo:

Ingresa un número> 5
1
3
4
5
Nota: los 3 pasos de este ejercicio se deben realizar con programación según lo visto en clase.
*/

const numeros = []

const limite = prompt("Ingrese un número: ")

for(let index = 1; index <= limite; index++){
    numeros.push(index)
    if (index === 2){
        numeros.pop
    }
    else{
    console.log(index)
    }
}


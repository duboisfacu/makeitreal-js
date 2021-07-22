/*
Escribe una función llamada promedio que reciba un arreglo de números y retorne el promedio los elementos.

// escribe la función acá

// código de prueba
console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200
*/

function promedio(array){
    let sum = 0
    for (a in array){
        sum += array[a] 
    }
    return sum / array.length
}

console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200
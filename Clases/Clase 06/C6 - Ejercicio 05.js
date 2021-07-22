/*
Escribe una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena.

Nota: puedes asumir que cada palabra está separada por espacio.

// escribe la función acá

// código de prueba
console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"
*/


function capitalizar(cadena) {
    fragmento = cadena.split(" ")
    
    for(palab in fragmento){
    fragmento[palab] = fragmento[palab].slice(0,1).toUpperCase() + fragmento[palab].slice(1, fragmento[palab].length)
	}
return fragmento.join(" ")
}

console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"
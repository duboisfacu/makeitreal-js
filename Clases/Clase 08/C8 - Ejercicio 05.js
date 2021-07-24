/* 
Escribe una función llamada productosBaratos que reciba un arreglo de objetos (que representan productos) 
y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:

// escribe tu función acá

// código de prueba
let prods = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 }
];
console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]
*/



// código de prueba
let prods = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 }
];

function productosBaratos(productos){
  a =  productos.filter(prod => prod.precio >= 5 && prod.precio < 10)
  return a.map(prod => prod.nombre)
}



console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]
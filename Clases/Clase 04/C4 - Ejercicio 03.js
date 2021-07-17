/*
Imprime la matriz en la consola, el resultado final debe ser el siguiente:

const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];
Grupo 1:
  Pablo
  Maria
  Pedro
Grupo 2:
  Diana
  Juan
  Federico
Grupo 3:
  Roberto
  Daniel
  Sandra
Nota 1: utiliza ciclos anidados para solucionar este ejercicio 
Nota 2: agrega dos espacios al principio de cada nombre
*/

const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];

for(index = 0; index <= mat.length - 1; index++){
  console.log(`Grupo ${index + 1}:`)
  for(i = 0; i <= mat[index].length -1; i++){
    console.log(mat[index][i])
  }
}
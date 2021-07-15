/*
Escribe un programa que piense un número de forma aleatoria y le 
pida al usuario que lo trate de adivinar (como en uno de los 
ejercicios anteriores). La diferencia es que esta vez el usuario 
puede intentar indefinidamente hasta que encuentre el número.
*/

const numPc = parseInt(Math.random() * 10)


while(true){
  num = parseInt(prompt("Ingrese un número: "))

  if (num === numPc){
    console.log("Ganaste!")
    break
  }
  else{
    console.log("Perdiste, intenta nuevamente!")
    continue
  }}
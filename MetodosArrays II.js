/*//Método Map
let numerosPares = [2,4,6,8,10];

let numerosParesDobro = numerosPares.map(function(valor){
  return valor*2
})

console.log("Arrray antes: "+" "+numerosPares)
console.log("Arrray Depois: "+" "+numerosParesDobro)

//Filter

let numerosFiltrados = numerosPares.filter(function(valor){
return valor < 6
})

console.log("Arrays filtrados: "+" "+numerosFiltrados)

//reduce

let somaPares = numerosPares.reduce(function(acumulativo, valor){
return acumulativo + valor
})
console.log("Soma Arrays: "+" "+somaPares)

//forech

numerosPares.forEach(function(valor, indice){
console.log("O índice: "+indice+" "+"Valor: "+ valor)
})*/

let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

let maiores = numeros.filter(function (numMaiores) {
  return numMaiores > 18
})
console.log("numeros maior que 18: " + maiores)

let dobro = numeros.map(function (numMaiores) {
  return numMaiores*2
})
console.log("Dobro de números: "+dobro)
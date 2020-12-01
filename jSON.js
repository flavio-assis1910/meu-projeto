let pessoa = {
    nome: "Flávio",
    idade: 28,
    altura: 1.70
}


let json = JSON.stringify(pessoa);
console.log(json)

let json2 = JSON.parse(json)
console.log(json2)


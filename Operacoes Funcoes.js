/*
// modo declarativo

function somar(a,b){
    console.log("Estou somando...")
    return a+b
}

console.log(somar(5,7));
//modo expressão

const multiplicar = function(a,b){
    console.log("Estou multiplicando...")
    return a*b
}
console.log(multiplicar(3,3));*/

/*function exemplo() {
    console.log("Olá, sou uma função");
}
exemplo()

function exemplo() {
    let frase = "Olá, sou uma função";
    return frase
}
console.log(exemplo())*/


/*function saudar(){
    let nome = "Flavio";
    let sobrenome = "Assis";
    return 'olá, ' + nome + ' ' + sobrenome + "!";
}
console.log(saudar())*/

/*function saudar(nome,sobrenome){
    return 'olá, ' + nome + ' ' + sobrenome + "!";
}
console.log(saudar("Flávio","Assis"))*/

/*function Par(num){
    var num;

    if(num % 2==0){
        return true
    }
    return false
}
console.log(Par(3))*/


function anterior(num){
    return num-1
}
console.log(anterior(50))

function triplo(num){
    return num*3
}
console.log(triplo(5))

function anteriorDoTriplo(num){
    return num*3-1
}
console.log(anteriorDoTriplo(5))
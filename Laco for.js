/*for(let i=0;i<=4;i++){
    console.log("oi")
}*/

/*function papagaio(texto){
    
    for (let i=1;i<=5;i++){
        console.log(texto)
    }
}
papagaio("Flavio")*/

/*function pares(numero){

    var teste=0
for(var i=0;i<=numero;i++){
    if(i % 2 !== 0){
        teste ++
        
        
        
    //continue
    }
    
}
console.log(teste)
}
pares(10)*/

/*function ePar(num){
    var num;

    if(num % 2==0){
        return true
    }
    return false
}
console.log(ePar(2))*/

function naoPareDeContarImparesAte(numero) {
    for (let i = 0; i < numero; i++) {
        if (i % 2 != 0){
            console.log(i)
        }
    }
}
naoPareDeContarImparesAte(10)
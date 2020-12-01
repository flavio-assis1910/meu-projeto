let contador = 0;
/*while(contador<10){
    contador++;
    console.log(contador)
}*/

/*do{
    contador++
    console.log(contador)
}while(contador <10)*/

/*function count(inicio, fim) {

    do {
        console.log("O número atual é" + " " + inicio + " " + "e é menor do que" + " " + fim)
        inicio++
        continue
        //console.log("O número atual é: "+" "+inicio)
    } while (inicio < fim)
}

count(4, 6)*/


/*function count(inicio, fim) {

    while (inicio < fim) {
        inicio++      
        console.log("O número atual é" + " " + inicio + " " + "e é menor que" + " " + fim)
        continue
    }

}

count(4, 6)*/


/*function encontre5(numeros) {
    var num = 0;
    do {

        if(num === 5){
            console.log("Encontrei o 5")
            break
        }

        num++
        //console.log(num)

    } while (num < numeros)

}
encontre5(10)*/

function tabelaDeMultiplicacao(numero) {
    var multiplicacao = 0;  
    do {
        //console.log(numero * multiplicacao)
        multiplicacao++
        console.log(numero + " " + "*" + " " + multiplicacao + " " + "=" + " " + multiplicacao * numero)

    } while (multiplicacao < 10)

}
tabelaDeMultiplicacao(5)


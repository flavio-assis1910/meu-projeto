/*const somar = (numeroA, numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB)

console.log(calculadora(10, 20, somar))*/


/*const dobro = (numero) => numero * 2

const triplo = (numero) => numero * 3

const aplicar = (numero, funcao) => funcao(numero)

console.log(aplicar(5, dobro))
console.log(aplicar(5, triplo))*/

/*function dobro(numero) {
    return numero * 2
}

function triplo(numero) {
    return numero * 3
}

function aplicar(numero,funcao){
   return funcao(numero)
}

console.log(aplicar(5,dobro))
console.log(aplicar(5,triplo))*/

/*function somar(numero1, numero2) {
    return numero1 + numero2
}

function subtrair(numero1, numero2) {
    return numero1 - numero2
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2
}

function dividir(numero1, numero2) {
    return numero1 / numero2
}

function calculadora(numero1, numero2, funcao){
    return funcao(numero1, numero2)
}
console.log(calculadora(10,20,somar))
console.log(calculadora(10,20,subtrair))
console.log(calculadora(10,20,multiplicar))
console.log(calculadora(10,20,dividir))*/

/*A primeira função deverá se chamar adicionarHttp , a mesma, receberá por parâmetro uma URL que será concatenada com a
String "http://" no começo da URL e em seguida retornará esse valor. A segunda função se chamará processar  e receberá uma
lista de sites web e uma função. A função processar  retornará um array contendo todos os resultados aplicando a função que foi passada.*/

function adicionarHttp(url) {
    return "http://" + url

}

function processar(url, funcao) {


    var url = ["www.google.com", "www.yahoo.com"]
    var url2 = url.map(function (num) {
        return num
    })

    


}
console.log(processar())
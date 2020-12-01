/*function calculamenor5(num){ 
   var array = [];
   for(var i=0; i<num; i++) {
     array.push(i);
   }
   return array;
 }
  
 console.log(calculamenor5(5));*/


function inseredados(dados) {  

  var array = []

   for(var i=0;i<dados.length;++i)

       array.push(dados[i])

   return array

}

//Para testar:

console.log(inseredados(["gato","cachorro","tartaruga"]))
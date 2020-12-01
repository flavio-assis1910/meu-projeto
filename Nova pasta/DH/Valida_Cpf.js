
function validaCPF(cpf) {

     var testaCpf = "576.524.020-85" // atribuição do cpf na variável para testar a comparação
     if (cpf === testaCpf) { // valida se o cpf passado no parâmetro da função é igual ao cpf passado na variável
          console.log("CPF Válido") // Se for verdadeira a condição impre o a informação "CPF Válido"
     }
     else {
          console.log("CPF inválido") // Se for falso imprime a mensagem "CPF inválido"
     }
}
validaCPF("576.524.020-85") // chamada da função e passagem do parâmetro da função validaCPF para o parâmetro definido pela função(cpf)
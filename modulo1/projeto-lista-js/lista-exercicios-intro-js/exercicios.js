// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alt = Number(prompt("Digite a altura do retângulo: "))
  const largura = Number(prompt("Digite a largura do retângulo: "))
  const area = alt * largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em que ano você está? "))
  const anoNascimento = Number(prompt("Em que ano você nasceu? "))
  const idade = anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome: ")
  const idade = prompt("Digite sua idade: ")
  const email = prompt("Digite seu email: ")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual a sua primeiro cor favorita? ")
  const cor2 = prompt("Qual a sua segunda cor favorita? ")
  const cor3 = prompt("Qual a sua terceira cor favorita? ")
  console.log([cor1,cor2,cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = string.toUpperCase()
  return string

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeDeIngressos = custo / valorIngresso
  return quantidadeDeIngressos 

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const resposta = string1.length == string2.length
  return resposta
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const quantidadeDeElementos = array.length
  const ultimoElemento = array[quantidadeDeElementos-1]
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const quantidadeDeElementos = array.length
  let ultimoElemento = array[quantidadeDeElementos-1]
  let primeiroElemento = array[0]
  array[quantidadeDeElementos-1] = primeiroElemento
  array[0] = ultimoElemento
  return array

}



// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toLowerCase()
  string2 = string2.toLowerCase()
  resposta = string1 === string2
  return resposta
}



// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em que ano você está? "))
  const anoNascimento = Number(prompt("Em que ano você nasceu? "))
  const anoDaCarteira = Number(prompt("Em que ano sua carteira foi emitida? "))
  const idade = anoAtual - anoNascimento
  const cond1 = (idade <= 20) && ((anoAtual - anoDaCarteira) >= 5 )   
  const cond2 = (20 < idade && idade <= 50) && ((anoAtual - anoDaCarteira) >= 10 )
  const cond3 = (idade > 50) && ((anoAtual - anoDaCarteira) >= 15 )
  const resposta = cond1 || cond2 || cond3

  return (console.log(resposta))

}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const condicao1 = ano % 400 == 0
  const condicao2 = ((ano % 4) == 0) && ((ano % 100) != 0)
 
  const resposta = condicao1 || condicao2 
  return resposta

}



// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDeIdade = prompt("Você tem mais de 18 anos? ").toLowerCase()
  const ensinoMedio = prompt("Você possui ensino médio completo?").toLowerCase()
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?").toLowerCase()
  const cond1 = maiorDeIdade === "sim"
  const cond2 = ensinoMedio === "sim"
  const cond3 = disponibilidade === "sim"
  const resposta = cond1 && cond2 && cond3
  return (console.log(resposta))
}
// AULA FUNÇÕES 
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1
// a) 10
//    50

// b) Não teria nada impresso 

// EXERCÍCIO 2
// a) Modifica o texto para letras minúsculas e verifica se o texto contém a palavra cenoura
// b) true / true / false (depois verifiquei que esse último também é true)

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1
// a) 
function frase() {
    console.log("Eu sou Ilena, tenho 26 anos, moro em Recife e sou Engenheira Civil.")
}

// frase()

// b) 
function fraseUsuario(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}

const no = prompt("Digite seu nome: ")
const id = prompt("Digite sua idade: ")
const ci = prompt("Digite a cidade em que você mora: ")
const pr = prompt("Digite sua profissão: ")

fraseUsuario(no,id,ci,pr)

// EXERCÍCIO 2
// a)

function soma(n1, n2) {
    const resultado = n1 + n2
    return resultado    
}

console.log(soma(2,6))

// b)
//teste com return:
function maiorOuIgual(n1, n2) {
    const resposta = n1 >= n2
    return resposta
}

console.log(maiorOuIgual(1,2))

// c)
// teste sem return:
function numeroPar(n1) {
    const resposta = n1 % 2 == 0 
    console.log(resposta)
}

numeroPar(6)

// d)

function mensagem(frase) {
    const tamanho = frase.length
    const fraseMaiuscula = frase.toUpperCase()
    console.log(`tamanho da frase: ${tamanho}, ${fraseMaiuscula}`)
} 

mensagem("olá eu me chamo ilena")


// EXERCÍCIO 3

function operacoes(n1, n2) {
    const soma = n1 + n2
    const subtracao = n1 - n2
    const multiplicacao = n1 * n2
    const divisao = n1 / n2
    return (`Números inseridos: ${n1} e ${n2} \n Soma: ${soma} \n Diferença: ${subtracao}\n Multiplicação: ${multiplicacao}\n Divisão: ${divisao}`)
}

const numero1 = Number(prompt("Insira um número: "))
const numero2 = Number(prompt("Insira outro número: "))

console.log(operacoes(numero1,numero2))

// DESAFIOS

// EXERCÍCIO 1

function funcao1(n1) {
    console.log(n1)
}

function funcao2(x , y) {
    const soma = x + y
    funcao1(soma)
}

funcao2(2,3)

// // EXERCÍCIO 2
function teoremaDePitagoras(c1, c2) {
    const h = Math.sqrt((c1*c1) + (c2*c2))
    return h
}

console.log(teoremaDePitagoras(3,4))





// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// ** Exercício 1:
// 10
// 10 5 

// ** Exercício 2:
// Vai dar um erro porque c não foi declarada como const ou let ou
// vai aparecer: 10 10 10 

// teste:
//let a = 10
//let b = 20
//c = a
//b = c
//a = b 

//console.log(a, b, c)
// Imprimiu: 10 10 10

// ** Exercício 3:
// p = horasDeTrabalho
// t = salarioDiario

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// ** Exercício 1:
let nome
let idade

console.log(typeof nome)
console.log(typeof idade)
// Foi impresso o tipo Undefined porque não foi atribuido um valor a variavel

nome = prompt("Digite seu nome: ")
idade = prompt("Digite sua idade: ")

console.log(typeof nome)
console.log(typeof idade)
// Ambos retornam como String por causa da função prompt

console.log("Olá", nome, ", você tem", idade, "anos")

// ** Exercício 2:
let maiorDeIdade 
let gostaDeProgramar
let estudaNaLabenu

maiorDeIdade = prompt("Você é maior de idade? ")
gostaDeProgramar = prompt("Você gosta de programar? ")
estudaNaLabenu = prompt("Você conhece a Labenu? ")

resp1 = maiorDeIdade
resp2 = gostaDeProgramar
resp3 = estudaNaLabenu

console.log("Você é maior de idade? ","-", resp1)
console.log("Você gosta de programar? ","-", resp2)
console.log("Você conhece a Labenu? ","-", resp3)

// ** Exercício 3:
let a = 5
let b = 10

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// DESAFIOS
let numero1 = prompt("Digite o primeiro número: ")
let numero2 = prompt("Digite o segundo número: ")

let num1 = Number(numero1)
let num2 = Number(numero2)

let x = Number(num1 + num2)
let y = Number(num1 * num2)

console.log("A soma dos números é ", x)
console.log("A soma dos números é ", y)
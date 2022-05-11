// EXERCÍCIOS STRINGS E ARRAYS

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO 

// EXERCÍCIO 1

// a. undefined 
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// EXERCÍCIO 2
// SUBI NUM ÔNIBUS EM MARROCOS, 27

// EXERCÍCIOS DE ESCRITA DE CÓDIGO 

// EXERCÍCIO 1

const nomeDoUsuario = prompt("Digite seu nome: ")
const emailDoUsuario = prompt("Digite seu email: ")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// EXERCÍCIO 2
// a.
const comidasPreferidas = ["coxinha", "feijoada", "chocolate", "pão de queijo", "bolo de chocolate"]
// b.
console.log(comidasPreferidas)
console.log("Essas são minhas comidas preferidas:", "\n", comidasPreferidas[0],"\n", 
    comidasPreferidas[1],"\n", comidasPreferidas[2],"\n", comidasPreferidas[3],"\n", comidasPreferidas[4])
// c.
const pergunta = prompt("Qual é sua comida preferida? ")
comidasPreferidas[1] = pergunta
console.log(comidasPreferidas)

// EXERCÍCIO 3
// a. 
let listaDeTarefas = []
//b.
let tarefa1 = prompt("Digite a primeira tarefa do dia: ")
listaDeTarefas.push(tarefa1)
let tarefa2 = prompt("Digite a segunda tarefa do dia: ")
listaDeTarefas.push(tarefa2)
let tarefa3 = prompt("Digite a terceira tarefa do dia: ")
listaDeTarefas.push(tarefa3)
//c.
console.log(listaDeTarefas)
//d. 
const indice = prompt("Digite o índice da tarefa realizada (0, 1 ou 2): ")
//e. 
listaDeTarefas.splice(indice, 1)
//f.
console.log(listaDeTarefas)

// DESAFIOS

// 1. 
const frase = prompt("Digite uma frase: ")
const array = frase.split(" ")

console.log(array)

// 2. 
const lista = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const resp = lista.indexOf("Abacaxi")

console.log(`O índice da palavra Abacaxi é ${resp} e o tamanho do array é ${lista.length}`)  
















// LAÇOS

// Exercícios de interpretação de código:

// EXERCÍCIO 1:
// Passando os numeros de 0 até 4 e imprimindo o último que é 4.  (Depois eu vi 
// que errei e na verdade 4 vai ser o índice, mas o que tá sendo impresso é o valor que será 10)

// EXERCÍCIO 2:
// a) Do 19 ao 30, cada um em uma linha.
// b) Fazer um contador contador = 1, e indice = contador - 1

// let contador = 1 
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     indice = contador - 1
//     contador = contador + 1 
//     console.log(numero, indice)
// }

// EXERCÍCIO 3:
// Vai imprimir: ****

// Exercícios de escrita de código:

// EXERCÍCIO 1:
let quantosBichos = Number(prompt("Quantos bichinhos de estimação você tem?"))

if (quantosBichos == 0) {
    console.log("Que pena! Você pode adotar um pet!")
} else {
    let nomes = []
    for (let i = 0; i < quantosBichos; i++) {
        let perguntaNome = prompt("Quais os nomes deles? ")
        nomes.push(perguntaNome)
    }
console.log(nomes)
}

// EXERCÍCIO 2:
let arrayOriginal = [1,6,7]

//a)
for (let numeros of arrayOriginal) {
    console.log(numeros)
}

//b) 
for (let numeros of arrayOriginal) {
    console.log(numeros/10)
}

//c) 
let novoArray = []
for (let numeros of arrayOriginal) {
    if (numeros % 2 == 0) {
        novoArray.push(numeros)
    }
}
console.log(novoArray)

//d)
let i = 0
let novoArrayStrings = []
while (i < arrayOriginal.length) {
    for (let numeros of arrayOriginal) {
        novoArrayStrings.push(`O elemento do índex ${i} é: ${numeros} `)
        i = i + 1
    }
}
console.log(novoArrayStrings)

// e)
let valorMaximo = 0
let indice = 0
for(let i = 0; i < arrayOriginal.length; i++) {
    if (valorMaximo < arrayOriginal[i]) {
     valorMaximo = arrayOriginal[i]
    } 
}
console.log(valorMaximo)





// DESAFIOS 

// DESAFIO 1:

console.log("Vamos jogar!")
let numeroPensado = Number(prompt("Digite o número pensado:"))
let numeroChutado

let i = 0
while (numeroChutado != numeroPensado) {
    numeroChutado = Number(prompt("Chute um número: "))
    if (numeroChutado < numeroPensado) {
        console.log("Errou, é maior")
    } else {
        console.log("Errou, é menor") 
    }
i = i + 1
}
console.log("Acertou!")
console.log("O número de tentativas foi:", i)

// DESAFIO 2:

console.log("Vamos jogar!")
let numeroPensado = Math.floor(Math.random() * 100)
let numeroChutado

let i = 0
while (numeroChutado != numeroPensado) {
    numeroChutado = Number(prompt("Chute um número: "))
    if (numeroChutado < numeroPensado) {
        console.log("Errou, é maior")
    } else {
        console.log("Errou, é menor") 
    }
i = i + 1
}
console.log("Acertou!")
console.log("O número de tentativas foi:", i)

// A alteração foi fácil, só troquei o imput pela função que escolhe números aleatórios.
// Acredito que não tinha outra forma mais fácil.



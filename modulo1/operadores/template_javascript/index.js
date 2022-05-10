// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1:
// a. false
// b. false
// c. true
// d. boolean

// EXERCÍCIO 2:
// A saída do prompt será uma String. Será impresso a junção dos números.

// EXERCÍCIO 3:
// const soma = Number(primeiroNumero) + Number(segundoNumero)

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCÍCIO 1:

let idadeUsuario = prompt("Qual é a sua idade? ")
let idadeMelhorAmigo = prompt("Qual é a idade do seu melhor amigo? ")

let resposta = Number(idadeUsuario) > Number(idadeMelhorAmigo)

console.log("Sua idade é maior do que a do seu melhor amigo?", resposta)

let diferencaDeIdade = Number(idadeUsuario) - Number(idadeMelhorAmigo)

console.log("A diferença de idade entre vocês é de", diferencaDeIdade, "anos.")

// EXERCÍCIO 2:

let numeroPar = prompt("Digite um número par: ")
numeroPar = Number(numeroPar)

console.log(numeroPar % 2)
// c. O resto de uma divisão entre um número par e 2 será sempre 0.
// d. O resultado será 1. 

// EXERCÍCIO 3:
let idadeEmAnos = prompt("Qual é a sua idade? ")
idadeEmAnos = Number(idadeEmAnos)

let idadeEmMeses = idadeEmAnos * 12
let idadeEmdias = idadeEmAnos * 365
let idadeEmHoras = idadeEmAnos * 365 * 24

console.log("Idade em meses: ", idadeEmMeses)
console.log("Idade em dias: ", idadeEmdias)
console.log("Idade em horas: ", idadeEmHoras)

// EXERCÍCIO 4:
let numero1 = Number(prompt("Digite um número: "))
let numero2 = Number(prompt("Digite outro número: "))

console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 == numero2)
console.log("O primeiro número é divisível pelo segundo?", (numero1 % numero2) == 0)
console.log("O segundo número é divisível pelo primeiro?", (numero2 % numero1) == 0)


// DESAFIOS

// EXERCÍCIO 1:
// a)
let fahrenheit1 = 77
let kelvin1 = (fahrenheit1 - 32) * (5/9) + 273.15

console.log("A temperatura em Kenvin é", kelvin1, "K")

// b) 
let celsius1 = 80
let fahrenheit2 = (celsius1) * (9/5) + 32

console.log("A temperatura em Fahrenheit é", fahrenheit2, "F")

// c)
let celsius2 = 30 
let fahrenheit3 = (celsius2) * (9/5) + 32
let kelvin2 = (fahrenheit3 - 32) * (5/9) + 273.15

console.log("A temperatura em Fahrenheit é", fahrenheit3, "F")
console.log("A temperatura em Kenvin é", kelvin2, "K")

// d) 
let celsius3 = Number(prompt("Digite a temperatura em Celsius: "))
let fahrenheit4 = (celsius3) * (9/5) + 32
let kelvin3 = (fahrenheit4 - 32) * (5/9) + 273.15

console.log("A temperatura em Fahrenheit é", fahrenheit4, "F")
console.log("A temperatura em Kenvin é", kelvin3, "K")

// EXERCÍCIO 2:
let quilowattHora
let valor = quilowattHora * 0.05

// a)
quilowattHora = 280
valor = quilowattHora * 0.05
console.log("O valor a ser pago é: ", valor, "reais")

// b)
quilowattHora = 280
valorComDesconto = (quilowattHora * 0.05) * 0.85
console.log("O valor com desconto é: ", valorComDesconto, "reais")

// // EXERCÍCIO 3:

// a)
let libra = Number(prompt("Digite a massa em libra: "))
let quiloGrama1 = 0.453592 * libra 

console.log("", libra, "lb equivalem a", quiloGrama1, "kg")

// b) 
let onça = Number(prompt("Digite a massa em onça: "))
let quiloGrama2 = 0.0283495 * onça 

console.log("", onça, "oz equivalem a", quiloGrama2, "kg")

// c)
let milha = Number(prompt("Digite a distância em milha: "))
let metro1 = 1609.34 * milha 

console.log("", milha, "mi equivalem a", metro1, "m")

// d)
let pes = Number(prompt("Digite a distância em pés: "))
let metro2 = 0.3048 * pes

console.log("", pes, "ft equivalem a", metro2, "m")

// e)
let galao = Number(prompt("Digite o volume em galões: "))
let litro1 = 3.78541 * galao

console.log("", galao, "gal equivalem a", litro1, "l")

// f)
let xicara = Number(prompt("Digite o volume em xícaras: "))
let litro2 = 0.24 * xicara

console.log("", xicara, "xic equivalem a", litro2, "l")







// CONDICIONAIS 

// Exercícios de interpretação de código

// EXERCÍCIO 1 :
// a) Ele testa se o resto da divisão (de um número dado pelo usuário)
// por 2 é igual a zero. 
// b) Números pares
// c) Números ímpares 

// EXERCÍCIO 2 :
// a) Para verificar o preço de uma fruta escolhida pelo usuário.
// b) O preço da Maçã é R$ 2.25
// c) O preço da Pêra é R$ 5

// EXERCÍCIO 3 :
// a) Pedindo para o usuário digitar um número e 
// transformando a string da saída em número.
// b) 
//  para o 10:Esse número passou no teste
//            Essa mensagem é secreta!!!
//  para o -10: (nada será impresso)
// c) Sim, a variável mensagem será indefinida porque ela está dentro do bloco if.


// Exercícios de escrita de código

// EXERCÍCIO 1 :
// a) 
const idade = Number(prompt("Digite sua idade: "))
// b)
if (idade >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

// EXERCÍCIO 2 :
const turno = prompt("Digite seu turno: M(matutino), V(vespertino) ou N(noturno)")

if (turno === "M") {
    console.log("Bom dia!")
} else if(turno === "V"){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}

// EXERCÍCIO 3 :

turno = prompt("Digite seu turno: M(matutino), V(vespertino) ou N(noturno)")
switch (turno) {
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;
    default:
        break;
}

// EXERCÍCIO 4 :
const generoFilme = prompt("Qual o gênero do  filme? ")
const preco = Number(prompt("Qual o preço do ingresso? "))

// RESOLUÇÃO 1:
if (generoFilme === "fantasia") {
    if (preco < 15 ){
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :( ")
    }
} else {
    console.log("Escolha outro filme :( ")
}


// RESOLUÇÃO 2:
if ((generoFilme === "fantasia") && (preco < 15)) {
        console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :( ")
}

// DESAFIOS:

// DESAFIO 1:

generoFilme = prompt("Qual o gênero do  filme? ")
preco = Number(prompt("Qual o preço do ingresso? "))

if (generoFilme === "fantasia") {
    if (preco < 15 ){
        const lanche = prompt("Qual lanchinho você vai comprar?")
        console.log("Bom filme!")
        console.log(`Aproveite o seu ${lanche}`)
    } else {
        console.log("Escolha outro filme :( ")
    }
} else {
    console.log("Escolha outro filme :( ")
}

// DESAFIO 2:

const nome = prompt("Digite seu nome completo: ")
const tipoDeJogo = prompt("Qual o tipo de jogo, IN(internacional) ou DO(doméstico)? ")
const etapaDoJogo = prompt("Qual a etapa do jogo, SF(Semi-final), DT(Decisão de terceiro lugar) ou FI(final)? ")
const categoria = prompt("Qual a categoria? (1, 2, 3 ou 4)")
const quantidadeDeIngressos = Number(prompt("Qual a quantidade de ingressos? "))

const dadosDaCompra = (` ---Dados da compra--- \n Nome do cliente:${nome} \n Tipo do Jogo: ${tipoDeJogo}
 Etapa do jogo: ${etapaDoJogo} \n Categoria: ${categoria} \n Quantidade de Ingressos: ${quantidadeDeIngressos}`)

const dolar = 4.1
let valorDoIngresso 
let valorTotal 
let valoresEmReal = (`---Valores--- \n Valor do ingresso: R$ ${valorDoIngresso} \n Valor total: R$ ${valorTotal*quantidadeDeIngressos}`)
let valoresEmDolar = (`---Valores--- \n Valor do ingresso: U$ ${valorDoIngresso} \n Valor total: U$ ${valorTotal*quantidadeDeIngressos}`)



if (tipoDeJogo==="DO") {
    if (etapaDoJogo === "SF") {
        switch (categoria) {
            case "1":
                valorDoIngresso = 1320
                break;
            case "2":
                valorDoIngresso = 880
                break;
            case "3":
                valorDoIngresso = 550
                break;
            case "4":
                valorDoIngresso = 220
                break;
            default:
                break;
        } 
    } else if (etapaDoJogo === "DT") {
        switch (categoria) {
            case "1":
                valorDoIngresso = 660
                break;
            case "2":
                valorDoIngresso = 440
                break;
            case "3":
                valorDoIngresso = 330
                break;
            case "4":
                valorDoIngresso = 170
                break;
            default:
                break;
        }
    } else if (etapaDoJogo === "FI") {
        switch (categoria) {
            case "1":
                valorDoIngresso = 1980
                break;
            case "2":
                valorDoIngresso = 1320
                break;
            case "3":
                valorDoIngresso = 880
                break;
            case "4":
                valorDoIngresso = 330
                break;
            default:
                break;
        }
    }
    console.log(dadosDaCompra)
    valoresEmReal = (`---Valores--- \n Valor do ingresso: R$ ${valorDoIngresso} \n Valor total: R$ ${valorDoIngresso*quantidadeDeIngressos}`)
    console.log(valoresEmReal)
} else {
    if (etapaDoJogo === "SF") {
        switch (categoria) {
            case "1":
                valorDoIngresso = 1320 / dolar
                break;
            case "2":
                valorDoIngresso = 880 / dolar
                break;
            case "3":
                valorDoIngresso = 550 / dolar
                break;
            case "4":
                valorDoIngresso = 220 / dolar
            default:
                break;
        } 
    } else if (etapaDoJogo === "DT") {
        switch (categoria) {
            case "1":
                valorDoIngresso = 660 / dolar
                break;
            case "2":
                valorDoIngresso = 440 / dolar
                break;
            case "3":
                valorDoIngresso = 330 / dolar
                break;
            case "4":
                valorDoIngresso = 170 / dolar
                break;
            default:
                break;
        }
    } else if (etapaDoJogo === "FI") {
        switch (categoria) {
            case "1":
                valorDoIngresso = 1980 / dolar
                break;
            case "2":
                valorDoIngresso = 1320 / dolar
                break;
            case "3":
                valorDoIngresso = 880 / dolar
                break;
            case "4":
                valorDoIngresso = 330 / dolar
                break;
            default:
                break;
        }
    }
    console.log(dadosDaCompra)
    valoresEmDolar = (`---Valores--- \n Valor do ingresso: U$ ${valorDoIngresso} \n Valor total: U$ ${valorDoIngresso*quantidadeDeIngressos}`)
    console.log(valoresEmDolar)
}









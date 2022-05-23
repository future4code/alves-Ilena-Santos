// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function (a, b) {
        return a - b
    })
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novoArray = []
    for (let numero of array) {
        if (numero % 2 === 0) {
            let numerosPares = novoArray.push(numero)
        }
    }
    return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray = []
    for (let numero of array) {
        if (numero % 2 === 0) {
            let numerosPares = novoArray.push(numero ** 2)
        }
    }
    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity
    for (let numero of array) {
        if (numero > maior) {
            maior = numero
        }
    }
    return maior

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1 >= num2 && num1 - num2 >= 0) {
        objeto = {
            maiorNumero: num1,
            maiorDivisivelPorMenor: num1 % num2 == 0,
            diferenca: num1 - num2
        }
    } else if (num2 > num1 && num2 - num1 > 0) {
        objeto = {
            maiorNumero: num2,
            maiorDivisivelPorMenor: num2 % num1 == 0,
            diferenca: num2 - num1
        }

    } return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let tamanhoDoArray = n
    let numero = 0
    let novoArray = []
    for (let i=0; i < n ; i++){
        if (numero % 2 === 0){
            let numerosPares = novoArray.push(numero) 
        }
    numero = numero + 2
    } 
    return novoArray
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC){
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else { return "Escaleno"}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
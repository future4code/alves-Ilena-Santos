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
    for (let i = 0; i < n; i++) {
        if (numero % 2 === 0) {
            let numerosPares = novoArray.push(numero)
        }
        numero = numero + 2
    }
    return novoArray
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles"
    } else { return "Escaleno" }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)
    segundoMaior = array[array.length - 2]
    segundoMenor = array[1]
    novoArray = [segundoMaior, segundoMenor]
    return novoArray

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    filme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
    let frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
    return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

    let novoObjetoPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return novoObjetoPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasComPermissao = pessoas.filter((pessoa) => {
        return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60
    })
    return pessoasComPermissao
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasSemPermissao = pessoas.filter((pessoa) => {
        return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60
    })
    return pessoasSemPermissao
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let resultado = contas.map((conta) =>{
        let soma = conta.compras.reduce((itemAnt, itemAtual)=> itemAnt+itemAtual,0)
        let saldo = conta.saldoTotal 
        return ({...conta,saldoTotal:saldo-soma,compras:[]})
    }) 
    let novoArray = resultado
    return novoArray
}  

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
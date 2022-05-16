// Exercícios de interpretação de código

// EXERCÍCIO 1:
// a)
// Matheus Nachtergaele
// Virginia Cavendish
// canal: "Globo", horario: "14h"


// EXERCÍCIO 2:
// a)
// nome: Juca , idade: 3, raca: SRD
// nome: Juba , idade: 3, raca: SRD
// nome: Jubo , idade: 3, raca: SRD
// b) Cria uma cópia de um objeto

// EXERCÍCIO 3:
// a)
// false
// undefined 
// b) Em objetos, o colchete com uma String dentro pode ser utilizado para obter o valor de uma chave.


// Exercícios de escrita de código

// EXERCÍCIO 1:
// a)
const pessoa = {
    nome: "Ilena",
    apelidos: ["Lena", "Ileninha", "Ilê"]
}

function imprimeApelidos(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

imprimeApelidos(pessoa)

// b)
const novosApelidos = {
    ...imprimeApelidos,
    apelidos: ["Pequenininha", "Lenis", "Helena"]
}

imprimeApelidos(novosApelidos)

// EXERCÍCIO 2:
// a)

const pessoa1 = {
    nome: "ilena",
    idade: 26,
    profissao: "Engenheira"
}

const pessoa2 = {
    nome: "luisa",
    idade: 28,
    profissao: "Arquiteta"
}

// b)

function retornaArray(objeto) {
    const lista = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
    console.log(lista)
}

retornaArray(pessoa1)
retornaArray(pessoa2)

// EXERCÍCIO 3:
//a)
const carrinho = []
// b)
const fruta1 = {
    nome: "Laranja",
    disponibilidade: true
}

const fruta2 = {
    nome: "Morango",
    disponibilidade: true
}
const fruta3 = {
    nome: "Banana",
    disponibilidade: true
} 

// c)
function frutasNoCarrinho(frutas) {
    return carrinho.push(frutas.nome)
}

frutasNoCarrinho(fruta1)
frutasNoCarrinho(fruta2)
frutasNoCarrinho(fruta3)

// d)
console.log(carrinho)

// DESAFIOS:

// DESAFIO 1:

function dadosDoUsuario() {
    const nome = prompt("Digite seu nome: ")
    const idade = prompt("Digite sua idade: ")
    const profissao = prompt("Digite sua profissão: ")
    usuario = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
    console.log(usuario)
    console.log("tipo", typeof usuario)
}

dadosDoUsuario()

// DESAFIO 2:

filme1 = {
    nome: "Harry Potter e a Pedra Filosofal",
    anoDeLancamento: 2001
}

filme2 = {
    nome: "Procurando Nemo",
    anoDeLancamento: 2003
}

function lancamentoDosFilmes(primeiroFilme, segundoFilme) {
    console.log(`O primeiro filme foi lançado antes do segundo filme? ${primeiroFilme.anoDeLancamento < segundoFilme.anoDeLancamento}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo filme? ${primeiroFilme.anoDeLancamento == segundoFilme.anoDeLancamento}`)
}

lancamentoDosFilmes(filme1,filme2)

// DESAFIO 3:
function estoqueDeFrutas(fruta) {
    const dispon = {
        ...fruta,
        disponibilidade: !fruta.disponibilidade
    }
    console.log(dispon)
}

estoqueDeFrutas(fruta1)
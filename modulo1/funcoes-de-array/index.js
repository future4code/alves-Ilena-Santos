// FUNÇÕES DE ARRAY

// Exercícios de interpretação de código

// EXERCÍCIO 1:
// Todos os elementos do array, o index e todo array. Cada um em uma linha.

// EXERCÍCIO 2:
// Um array com os nomes 

// EXERCÍCIO 3:
// Um array com os nomes Amanda Rangel e Laís Petra. (Depois de rodar o código
// eu vi que ele imprime o objeto todo dos que não tem o apelido "chijo")

// Exercícios de escrita de código

// EXERCÍCIO 1:
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// a)
const nomeDosCachorros = pets.map((cachorros) => {
    return cachorros.nome
})

console.log(nomeDosCachorros)

// b)
const cachorrosSalsicha = pets.filter((cachorros) => {
    return cachorros.raca.toLowerCase() === "salsicha"
})


console.log(cachorrosSalsicha)

// c)
const cachorrosPoodle = pets.filter((cachorros) => {
    return cachorros.raca.toLowerCase() === "poodle"
})


const nomeCachorroPoodle = cachorrosPoodle.map((cachorros) => {
    return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorros.nome}`)
})

console.log(nomeCachorroPoodle)

// EXERCÍCIO 2:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a)

const nomeProdutos = produtos.map((produtos) => {
    return produtos.nome
})

console.log(nomeProdutos)

// b)
const produtosComDesconto = produtos.map((produtos) => {
    return ({ nome: produtos.nome, novoPreço: produtos.preco * 0.95 })
})

console.log(produtosComDesconto)

// c)
const produtosBebidas = produtos.filter((produtos) => {
    return produtos.categoria.toLowerCase() === "bebidas"
})

console.log(produtosBebidas)

// d)

// RESOLUÇÃO 1
let produtosYpe = produtos.filter((produtos) => {
    if (produtos.nome.includes("Ypê")) {
        return produtos
    }
})
console.log(produtosYpe)

// RESOLUÇÃO 2
produtosYpe = produtos.filter((produtos) => {
    return produtos.nome.includes("Ypê")
})

console.log(produtosYpe)

// d)



const fraseYpe = produtosYpe.map((produtos) => {
    return (`Compre ${produtos.nome} por R$ ${produtos.preco}`)
})

console.log(fraseYpe)


// DESAFIOS 

// DESAFIO 1:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

// a)
const nomePokemons = pokemons.map((pokemons) => {
    return pokemons.nome
})

console.log(nomePokemons.sort())

// b)
const tipoPokemons = pokemons.map((pokemons) => {
    return pokemons.tipo
})

let arraySemRepetidos = [...new Set(tipoPokemons)]

console.log(arraySemRepetidos)




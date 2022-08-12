// a)
const minhaString:string = "Oi!"
// Aparece o erro: O tipo 'number' não pode ser atribuído ao tipo 'string'.

//b) 
const meuNumero:number = 5
const meuNumero2: number | string = 2
// Adicionamos o Ou | 

//c) 

enum Cores {
    VERMELHO = "vermelho",
    LARANJA = "LARANJA",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    AZULESCURO = "azul-escuro",
    VIOLETA = "violeta"
}

type Pessoa = { 
    nome: string,
    idade: number,
    corFavorita: Cores
}

const pessoa1: Pessoa = {
    corFavorita: Cores.AMARELO,
    idade: 15,
    nome: "fulano"
}
const pessoa2: Pessoa = {
    corFavorita: Cores.AZUL,
    idade: 18,
    nome: "fulana"
}
const pessoa3: Pessoa = {
    corFavorita: Cores.VERMELHO,
    idade: 20,
    nome: "fulaninho"
}

const lista: Pessoa[] = []

lista.push(pessoa1,pessoa2,pessoa3)

console.table(lista)
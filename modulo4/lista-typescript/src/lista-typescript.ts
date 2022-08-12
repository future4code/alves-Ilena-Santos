// Exercicio 1

const nameAndBirthDate = (name: string, date: string) => {
    let arrayOfString: string[] = date.split("/")
    return console.log(`Olá me chamo ${name}, nasci no dia ${arrayOfString[0]} do mês de ${arrayOfString[1]} do ano de ${arrayOfString[2]}`)
}

nameAndBirthDate("fulano", "12/14/2022")

// Exercicio 2

const typeOfVariable = (parameter: any) => {
    return console.log(typeof parameter)
}

typeOfVariable(34)

// Exercicio 3

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type Movie = {
    name: string,
    year: number,
    genre: string,
    score?: number
}

const movieInformation = (movie: Movie) => {
    console.log(movie)
}

console.log(movieInformation({ name: "Harry potter", year: 2001, genre: GENERO.ACAO, score: 10 }))

// Exercicio 4
type Employeee = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean
}

enum Sector {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

const employees: Employeee[] = [
    { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
    { nome: "Maria", salário: 1500, setor: "vendas", presencial: false },
    { nome: "Salete", salário: 2200, setor: "financeiro", presencial: true },
    { nome: "João", salário: 2800, setor: "marketing", presencial: false },
    { nome: "Josué", salário: 5500, setor: "financeiro", presencial: true },
    { nome: "Natalia", salário: 4700, setor: "vendas", presencial: true },
    { nome: "Paola", salário: 3500, setor: "marketing", presencial: true }
]

const marketingEmployees = (employees: Employeee[]) => {
    const newArray: Employeee[] = employees.filter((employee) => {
        return employee.setor === Sector.MARKETING
    })
    return newArray
}

console.log(marketingEmployees(employees))

// Exercicio 5

type User = {
    name: string,
    email: string,
    role: string,
}

const users: User[] = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
]

const adminUsers = (users: User[]) => {
    const newArray: User[] = users.filter((user) => {
        return user.role === "admin"
    })
    return newArray
}

console.log(adminUsers(users))

// Exercicio 6

type Client = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clients: Client[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const negativeBalance = (clients: Client[]) => {
    clients.map((client) => {
        const total = client.debitos.reduce((a, b) => a + b, 0)
        client.saldoTotal = client.saldoTotal - total
        client.debitos = []

    })
    const negativeClients = clients.filter((client) => {
        return client.saldoTotal < 0
    })
    return negativeClients

}

console.log(negativeBalance(clients))

// Exercicio 7

// Exercicio 8
function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number): boolean | string {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao

    if (idade <= 20) {
        return tempoCarteira >= 5 ? true : false

    } else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? true : false

    } else if (idade > 50) {
        return tempoCarteira >= 15 ? true : false

    } else {
        return "error"
    }
}

console.log("precisa renovar?", checaRenovacaoRG(2022, 1996, 2011))

// Exercicio 9 

const anagram = (word: string) => {
    let number = word.length
    let result = number
    for (let i = 1; i < number; i++) {
        result *= i
    }
    return result
}

console.log(anagram("mesa"))

// Exercicio 10

const teste = (numero: string) => {
    let primeiraParte = numero.split("-")
    const teste2 = primeiraParte[0].split("")
    let contador = 10
    let soma = 0

    teste2.map((numero) => {
        soma = Number(numero) * contador + soma
        contador = contador - 1
    })

    let primeiroDigito1 = 11 - (soma % 11)


    let novoNumero: string = ""

    if (primeiroDigito1 >= 10) {
        const primeiroDigito = 0
        novoNumero = numero + String(primeiroDigito)

    } else {
        const primeiroDigito = primeiroDigito1
        novoNumero = numero + String(primeiroDigito)
    }
  
    const teste3 = novoNumero.split("")
    let contador2 = 11
    let soma2 = 0

    teste3.map((numero) => {
        soma2 = Number(numero) * contador2 + soma2
        contador2 = contador2 - 1
    })

    let segundoDigito1 = 11 - (soma2 % 11)
    let novoNumero2: string = ""

    if (segundoDigito1 >= 10) {
        const segundoDigito = 0
        novoNumero2 = novoNumero + String(segundoDigito)

    } else {
        const segundoDigito = segundoDigito1
        novoNumero2 = novoNumero + String(segundoDigito)
    }
    return teste2
}

console.log(teste("145382206-20"))
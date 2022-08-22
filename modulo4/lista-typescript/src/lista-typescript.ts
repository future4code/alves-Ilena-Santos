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
    return movie
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
type Products = {
    nome: string, 
    quantidade: number, 
    valorUnitario:number | string
}

const products: Products[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const newInventory = (products:Products[]) =>{

    products.sort(function(x,y){
        let a = x.quantidade
        let b = y.quantidade
        return a - b
    }).map((product)=>{
        product.valorUnitario = ajustaPreco(product.valorUnitario as number)
    })
    return products
}

console.log(newInventory(products))

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

const checkCPF = (cpf: string) => {
    let firstPart = cpf.split("-")[0].replace(/\./g, "")
    let secondPart = cpf.split("-")[1]
    const nineNumbers = firstPart.split("")
    let quantifier1 = 10
    let sum1 = 0

    nineNumbers.map((numero) => {
        sum1 = Number(numero) * quantifier1 + sum1
        quantifier1 = quantifier1 - 1
    })

    let firstDigit = 11 - (sum1 % 11)
    let numberToCheck: string = ""

    if (firstDigit >= 10) {
        const realFirstDigit = 0
        numberToCheck = firstPart + String(realFirstDigit)

    } else {
        const realFirstDigit = firstDigit
        numberToCheck = firstPart + String(realFirstDigit)
    }
  
    const tenNumbers = numberToCheck.split("")
    let quantifier2 = 11
    let sum2 = 0

    tenNumbers.map((numero) => {
        sum2 = Number(numero) * quantifier2 + sum2
        quantifier2 = quantifier2 - 1
    })

    let secondDigit = 11 - (sum2 % 11)

    if (secondDigit >= 10) {
        const realSecondDigit = 0
        numberToCheck = numberToCheck + String(realSecondDigit)
    } else {
        const realSecondDigit = secondDigit
        numberToCheck = numberToCheck + String(realSecondDigit)
    }

    const elevenNumbers = firstPart + secondPart
 
    if (typeof cpf !== "string") {
        return ("CPF inválido!")
    } else if (elevenNumbers === "00000000000" || elevenNumbers == "00000000000" ||
    elevenNumbers == "11111111111" ||
    elevenNumbers == "22222222222" ||
    elevenNumbers == "33333333333" ||
    elevenNumbers == "44444444444" ||
    elevenNumbers == "55555555555" ||
    elevenNumbers == "66666666666" ||
    elevenNumbers == "77777777777" ||
    elevenNumbers == "88888888888" ||
    elevenNumbers == "99999999999"
    ) {
        return("CPF inválido!")
    }
    else if( numberToCheck === elevenNumbers ) {
        return ("CPF válido!")
    } 

}

console.log(checkCPF("145.382.206-20"))

// Exercicio 11

const convertNumbers = (number:number ) => {
    let newNumber:string = ""
    let rest: number = number 
    const array = [
        {letra: "M", valor: 1000},
        {letra: "CM", valor: 900},
        {letra: "D", valor: 500},
        {letra: "CD", valor: 400},
        {letra: "C", valor: 100},
        {letra: "XC", valor: 90},
        {letra: "L", valor: 50},
        {letra: "XL", valor: 40},
        {letra: "X", valor: 10},
        {letra: "IX", valor: 9},
        {letra: "V", valor: 5},
        {letra: "IV", valor: 4},
        {letra: "I", valor: 1}
    ]

        array.map((item)=>{
            if (rest >= item.valor
            ) {
                rest = rest - item.valor
                newNumber = newNumber + item.letra
            } 
        })

        return newNumber 
}

console.log(convertNumbers(1990))
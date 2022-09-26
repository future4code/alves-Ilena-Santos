import { calculateAge, calculateTheAverage, changeToUpperCase, checkIfEven, countLetters, modifyDate, randomNumber, separatesLetters, stringToNumber, users } from "./exercicios/exercicios"

describe("Praticando com Jest", () => {


    test("Primeiro teste", () => {
        expect(100).toBeGreaterThan(99)
    })

    // Exercicio 0
    test("A entrada 10 deve retornar true", () => {
        const input = 10
        const result = checkIfEven(input)
        expect(result).toBe(true)
    })
    // Exercicio 1
    test("A entrada bananinha deve retornar BANANINHA", () => {
        const input = "bananinha"
        const result = changeToUpperCase(input)
        expect(result).toBe("BANANINHA")
    })
    // Exercicio 2
    test("A entrada 'dev' deve retornar ['d','e','v']", () => {
        const input = "dev"
        const result = separatesLetters(input)
        expect(result).toEqual(['d', 'e', 'v'])
    })
    // Exercicio 3
    test("A string '50' deve retornar o número 50", () => {
        const input = "50"
        const result = stringToNumber(input)
        expect(result).toBe(50)
    })

    // Exercicio 4
    test("A string 'jest' deve retornar o número 4", () => {
        const input = "jest"
        const result = countLetters(input)
        expect(result).toBe(4)
    })

    // Exercicio 5
    test("Deve retornar um número entre 0 e 10", () => {
        const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const result = randomNumber()
        expect(array).toContainEqual(result)
    })

    // Exercicio 6
    test("Deve retornar true para a busca de Astrodev", () => {
        const input = {
            name: "Astrodev"
        }
        expect(users).toContainEqual(input)
    })

    // Exercicio 7
    test("Deve retornar o número 7 para o array [10, 4, 7, 6]", () => {
        const input = [10, 4, 7, 6]
        const result = calculateTheAverage(input)
        expect(result).toBe(7)
    })

    // Exercicio 8
    test("Deve retornar o número 22 para o ano 2000", () => {
        const input = 2000
        const result = calculateAge(input)
        expect(result).toBe(22)
    })

    // Exercicio 9
    test("Deve retornar a data 26/09/2022 para a data de entrada 2022/09/26", () => {
        const input = "2022/09/26"
        const result = modifyDate(input)
        expect(result).toBe("26/09/2022")
    })

})



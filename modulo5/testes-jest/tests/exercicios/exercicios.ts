// Exercicio 0
export const checkIfEven = (n: number): boolean => {
    if (n % 2 === 0) {
        return true
    }
    return false
}
// Exercicio 1

export const changeToUpperCase = (word: string): string => {
    return word.toUpperCase()
}
// Exercicio 2
export const separatesLetters = (word: string): string[] => {
    return word.split("")
}
// Exercicio 3
export const stringToNumber = (number: string): number => {
    return Number(number)
}
// Exercicio 4
export const countLetters = (word: string): number => {
    return word.length
}

// Exercicio 5
export const randomNumber = (): number => {
    return Math.floor(Math.random() * 11)
}
// Exercicio 6
interface User {
    name: string
}

export const users: User[] = [
    {
        name: "fulano"
    },
    {
        name: "maria"
    },
    {
        name: "Astrodev"
    }
]

// Exercicio 7

export const calculateTheAverage = (array: number[]): number => {
    let sum = 0
    array.map((number) => {
        return sum = sum + number
    })

    const average = Math.ceil(sum / (array.length))

    return average

}

// Exercicio 8
export const calculateAge = (yearOfBirth: number): number => {
    const currentYear = new Date().getFullYear()
    return currentYear - yearOfBirth
}

// Exercicio 9
export const modifyDate = (date: string): string => {
    const newDate = date.split("/").reverse().join("/")

    return newDate
}


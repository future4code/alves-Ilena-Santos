
// Exercício 2
// const value1 = Number(process.argv[3])
// const value2 = Number(process.argv[4])

// switch (process.argv[2]) {
//     case "add":
//         console.log("resultado da soma:",value1 + value2)
//         break
//     case "sub":
//         console.log("resultado da subtração:",value1 - value2)
//         break
//     case "mult":
//         console.log("resultado da multiplicação:",value1 * value2)
//         break
//     case "div":
//         console.log("resultado da divisão:",value1 / value2)
//         break
//     default:
//         console.log("deu erro")
//         break
// }

// Desafio 


const value1 = Number(process.argv[3])
const value2 = Number(process.argv[4])

if ( process.argv[2] === undefined || process.argv[3] === undefined || process.argv[4] === undefined) {
    console.log("\u001b[31m Esperava 3 parâmetros e recebi menos.")
} else {
    switch (process.argv[2]) {
        case "add":
            console.log("\u001b[32m resultado da soma:",value1 + value2)
            break
        case "sub":
            console.log("\u001b[33m resultado da subtração:",value1 - value2, "color:green;")
            break
        case "mult":
            console.log("\u001b[34m resultado da multiplicação:",value1 * value2)
            break
        case "div":
            console.log("\u001b[35m resultado da divisão:",value1 / value2)
            break
        default:
            console.log("\u001b[31m deu erro")
            break
    }

}


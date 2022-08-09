// Exercício 1
// a) serão acessados pela propriedade process.argv

//b)
// console.log(`Olá ${process.argv[2]}! Você tem ${process.argv[3]} anos`)

//c)
// console.log(`Olá ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${Number(process.argv[3])+7}`)

// Desafio


if (process.argv[2] === undefined || process.argv[3] === undefined) {
    console.log("\u001b[31m Esperava 2 parâmetros só recebi um.")
} else {
    console.log(`\u001b[35m Olá ${process.argv[2]}! Você tem ${process.argv[3]} anos`)
    console.log(`\u001b[35m Olá ${process.argv[2]}! Você tem ${process.argv[3]} anos. Em sete anos você terá ${Number(process.argv[3]) + 7}`)
}
// a) entrada: lista de numeros, saida: objeto
// b) array, objeto, number


// function obterEstatisticas(numeros:number[] = []) : {} {

//     const numerosOrdenados:number[] = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma:number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// console.log(obterEstatisticas([6,3,8]))
// console.log(typeof obterEstatisticas([7,4,9]))

type amostra = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => {}
}

const amostraDeNumeros: amostra ={
    numeros:[4,5,45,8,5],
    obterEstatisticas: (numeros) =>{
        const numerosOrdenados:number[] = numeros.sort(
            (a, b) => a - b
        )
    
        let soma:number = 0
    
        for (let num of numeros) {
            soma += num
        }
        const estatisticas = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }
        return estatisticas
    }
}
console.log(amostraDeNumeros)
console.log("resultado", amostraDeNumeros.obterEstatisticas(amostraDeNumeros.numeros))

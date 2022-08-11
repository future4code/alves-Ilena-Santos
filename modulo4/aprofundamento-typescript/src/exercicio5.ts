type consulta = {
    nome: string,
    idade: number,
    dataDaConsulta: string
}

const consultas: consulta[] = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

const ondernaConsultas = (consultas: consulta[]) => {
    consultas.sort(function(x,y){
        let a = x.nome.toLowerCase()
        let b = y.nome.toLowerCase()
        return a==b? 0 : a > b ? 1: -1
    })
    return consultas
}
console.table(ondernaConsultas(consultas))

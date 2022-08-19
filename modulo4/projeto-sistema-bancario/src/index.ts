import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

type Transaction = {
    value: number,
    date: string,
    description: string
}


type User = {
    name: string,
    cpf: number,
    birthDate: string,
    balance: number,
    statement: Transaction[]
}

let users: User[] = [
    {

        name: "Alice",
        cpf: 23456787537,
        birthDate: "2000/12/04",
        balance: 0,
        statement: []
    },
    {

        name: "Bob",
        cpf: 23487787537,
        birthDate: "1993/06/03",
        balance: 0,
        statement: []
    },
    {

        name: "Coragem",
        cpf: 23026787537,
        birthDate: "1996/05/24",
        balance: 0,
        statement: []
    }
]



app.post("/users", (req: Request, res: Response) => {
    try {
        const { name, cpf, birthDate } = req.body
        const birthDateToString = (birthDate.split("/")[0] + birthDate.split("/")[1] + birthDate.split("/")[2])
        let currentYear = new Date().getFullYear()
        const age = currentYear - birthDate.split("/")[2]

        if (!name || !cpf || !birthDate) {
            res.statusCode = 400
            throw new Error("Informe todos os dados")
        }

        if (typeof (name) !== "string" || typeof (cpf) !== "number" || typeof (birthDate) !== "string") {
            res.statusCode = 400
            throw new Error("Nome, cpf ou data de nascimento inválido.")
        }

        if (birthDateToString.length !== 8) {
            res.statusCode = 400
            throw new Error("Data de nascimento Inválida")
        }
        if (age < 18) {
            res.statusCode = 400
            throw new Error("Usuário deve ter mais de 18 anos!")
        }

        const checkOthersCPF = users.find((user) => {
            return user.cpf === cpf
        })

        if (checkOthersCPF) {
            res.statusCode = 400
            throw new Error("CPF já cadastrado")
        }

        users.push({
            name,
            cpf,
            birthDate,
            balance: 0,
            statement: []
        })

        res.send("Usuário cadastrado!")


    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})


app.get("/users", (req: Request, res: Response) => {
    try {
        res.send(users)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// DESAFIOS

// 2.
app.get("/users/:cpf", (req: Request, res: Response) => {
    try {
        const cpf = Number(req.params.cpf)

        const getUserByCPF = users.find((user) => {
            return user.cpf === cpf
        })

        if (!getUserByCPF) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado!")
        } else {
            res.send([{
                "usuário": getUserByCPF.name,
                "saldo": getUserByCPF.balance
            }])
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// 3.

// app.put("/users",(req: Request, res: Response)=>{
//     try {
//         const {name, cpf, value}= req.body

//         if (!name || !cpf || !value) {
//             res.statusCode = 400
//             throw new Error("Informe todos os dados")
//         }

//         if(typeof(name) !== "string" || typeof(cpf) !== "number" || typeof(value) !== "number" ) {
//             res.statusCode = 400
//             throw new Error("Nome, cpf ou data de nascimento inválido.")
//         }

//         const getUser = users.find((user)=>{
//             return user.cpf === cpf && user.name === name
//         })

//         if (!getUser) {
//             res.statusCode = 404
//             throw new Error("Usuário não encontrado!")
//         } else {
//             getUser.balance += value 
//         }

//         res.send(getUser)

//     } catch (error:any) {
//         res.status(res.statusCode || 500).send({ message: error.message })
//     }
// })

// 4.

app.put("/users", (req: Request, res: Response) => {
    try {
        const { name, cpf, value } = req.body

        if (!name || !cpf || !value) {
            res.statusCode = 400
            throw new Error("Informe todos os dados")
        }

        if (typeof (name) !== "string" || typeof (cpf) !== "number" || typeof (value) !== "number") {
            res.statusCode = 400
            throw new Error("Nome, cpf ou data de nascimento inválido.")
        }

        const getUser = users.find((user) => {
            return user.cpf === cpf && user.name === name
        })

        if (!getUser) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado!")
        } else {
            getUser.balance = getUser.balance + value
            getUser.statement.push({
                value,
                date: new Date().toDateString(),
                description: "Depósito de dinheiro"
            })
        }

        res.send(getUser)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// 5, 7 e 8
app.post("/users/:cpf", (req: Request, res: Response) => {
    try {
        const { dueDate, description, value } = req.body
        const cpf = Number(req.params.cpf)

        if (!description || !value) {
            res.statusCode = 400
            throw new Error("Informe todos os dados")
        }

        if (dueDate && typeof (dueDate) !== "string") {
            res.statusCode = 400
            throw new Error("Data de vencimento inválida.")
        }

        if (typeof (description) !== "string" || typeof (value) !== "number") {
            res.statusCode = 400
            throw new Error("Descrição, data ou valor inválido.")
        }
        if (Date.now() > Date.parse(dueDate)) {
            res.statusCode = 400
            throw new Error("Indique uma data futura")
        }

        const getUser = users.find((user) => {
            return user.cpf === cpf
        })

        if (!getUser) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado!")
        } else {
            if (getUser.balance < value) {
                res.statusCode = 400
                throw new Error("Saldo insuficiente")
            }
            if (!dueDate) {
                getUser.statement.push({
                    date: new Date().toDateString(),
                    description,
                    value
                })
            } else {
                getUser.statement.push({
                    date: dueDate,
                    description,
                    value
                })
            }
            res.send(getUser)
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// 6.
app.put("/users/:cpf", (req: Request, res: Response) => {
    try {
        const cpf = Number(req.params.cpf)

        const getUser = users.find((user) => {
            return user.cpf === cpf
        })

        if (!getUser) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado!")
        } else {
            getUser.statement.map((statement) => {
                if (Date.now() < Date.parse(statement.date)) {
                    getUser.balance = getUser.balance - statement.value
                }
            })
            res.send(getUser)
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})



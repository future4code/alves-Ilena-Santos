import express, { Request, Response } from "express";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors());


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

type User = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

// Exercicio 1
// a) GET
// b) com o path /users

app.get("/users", (req: Request, res: Response) => {
    try {
        if (!users.length) {
            res.statusCode = 404
            throw new Error("Não há usuários")
        } else {
            res.send(users)
        }
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercicio 2
// a) Através de query. Porque se trata de uma busca dentro de um mesmo conjunto.
// b) Fazendo o enum Type
app.get("/users/type", (req: Request, res: Response) => {
    try {
        const type: string = req.query.type as string
        if (!users.length) {
            res.statusCode = 404
            throw new Error("Não há usuários cadastrados.")
        }
        if (!type) {
            res.statusCode = 400
            throw new Error("Informe o type")
        } else {
            const usersByType = users.filter((user) => {
                return user.type === type
            })

            if (usersByType.length === 0) {
                res.statusCode = 404
                throw new Error("Não há usuários com essa propriedade")
            } else {
                res.send(usersByType)
            }
        }
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercicio 3
// a) Através de query. Porque se trata de uma busca dentro de um mesmo conjunto.

app.get("/users/name", (req: Request, res: Response) => {
    try {
        const name: string = req.query.name as string
        if (!users.length) {
            res.statusCode = 404
            throw new Error("Não há usuários cadastrados.")
        }
        if (!name) {
            res.statusCode = 400
            throw new Error("Informe o nome do usuário")
        } else {
            const usersByName = users.filter((user) => {
                return user.name.toLowerCase().includes(name.toLowerCase())
            })

            if (usersByName.length === 0) {
                res.statusCode = 404
                throw new Error("Não há usuários com esse nome")
            } else {
                res.send(usersByName)
            }
        }
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercicio 4
// a) Não houve mudança
// b) Não, porque o método put seria para atualizar dados de um usuário já existente.
app.post("/users", (req: Request, res: Response) => {
    try {
        const { name, email, type, age } = req.body


        if (!name || !email || !type || !age) {
            res.statusCode = 400
            throw new Error("Informe todos os dados")
        }
        if (typeof (age) !== "number") {
            res.statusCode = 400
            throw new Error("Idade inválida")
        }
        if (typeof (name) === "number" || typeof (email) === "number" || typeof (type) === "number") {
            res.statusCode = 400
            throw new Error("Nome, email ou tipo inválido")
        }
        users.push({
            id: Date.now(),
            name,
            email,
            type,
            age
        })
        res.send(users)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercicio 5
app.put("/users/:id", (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const name = req.body.name

        if (typeof (name) === "number") {
            res.statusCode = 400
            throw new Error("Nome inválido")
        }
        const user = users.find((user) => {
            return user.id === id
        })
        if (user) {
            user.name = name
            res.send(users)
        } else {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercicio 6
 
app.patch("/users/:id", (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const name = req.body.name

        if (typeof (name) === "number") {
            res.statusCode = 400
            throw new Error("Nome inválido")
        }
        const user = users.find((user) => {
            return user.id === id
        })
        if (user) {
            user.name = name
            res.send(users)
        } else {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercicio 7
app.delete("/users/:id", (req: Request, res: Response) => {
    try {
        const userId = Number(req.params.id)

        const chosenUser = users.find((user) => {
            return user.id === userId
        })

        if (chosenUser) {
            // const newProductsList = products.filter((product) => {
            //     return product.id !== productId
            // })
            const userToDelete = users.findIndex((user) => {
                return user.id === userId
            })

            users.splice(userToDelete, 1)

            res.send(users)
        } else {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})
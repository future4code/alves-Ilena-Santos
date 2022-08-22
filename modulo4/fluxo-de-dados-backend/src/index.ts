import express, { Request, Response } from "express";
import cors from "cors";
import { products } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// Exercicio 1
app.get("/test", (req: Request, res: Response) => {
    res.send("A API está pronta!")
})

// Exercicio 2
// Arquivo data.ts

// Exercicio 3
app.post("/products/create", (req: Request, res: Response) => {
    try {
        const name = req.body.name.toString() as string
        const price = req.body.price
        console.log(name, price)
        if (!name || !price) {
            res.statusCode = 400
            throw new Error("Nome ou preço não informados.")
        }
        if (price <= 0 || typeof (price) !== "number") {
            res.statusCode = 400
            throw new Error("Informe um valor válido")
        }

        const product = products.find((product) => product.name.toLowerCase() === name.toLowerCase())

        if (product) {
            res.statusCode = 400
            throw new Error("Já existe um produto com o nome informado.")
        } else {
            products.push({
                id: Date.now().toString(),
                name: name,
                price: price
            })
            res.send(products)
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercicio 4
app.get("/products", (req: Request, res: Response) => {
    try {
        if (!products.length) {
            res.statusCode = 404
            throw new Error("Não há produtos")
        } else {
            res.send(products)
        }
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

//Exercicio 5
app.put("/products/edit", (req: Request, res: Response) => {
    try {
        const productId = req.body.id
        const price = req.body.price
        console.log(productId, typeof (price))

        if (!productId || !price) {
            res.statusCode = 400
            throw new Error("Novo preço ou id não informados")
        }

        const checkProductId = products.find((product) => {
            return product.id === productId
        })

        if (checkProductId) {
            if (price <= 0 || typeof (price) !== "number") {
                res.statusCode = 400
                throw new Error("Informe um preço válido")
            } else {
                checkProductId.price = price
                res.send(products)
            }
        } else {
            res.statusCode = 404
            throw new Error("Produto não encontrado")
        }
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercicio 6
app.delete("/products/delete", (req: Request, res: Response) => {
    try {
        const productId = req.headers.id

        if (!productId) {
            res.statusCode = 400
            throw new Error("id não informado")
        }

        const checkProductId = products.find((product) => {
            return product.id === productId
        })

        if (checkProductId) {
            // const newProductsList = products.filter((product) => {
            //     return product.id !== productId
            // })
            const getProductToDelete = products.findIndex((product) => {
                return product.id === productId
            })

            products.splice(getProductToDelete, 1)

            res.send(products)
        } else {
            res.statusCode = 404
            throw new Error("Produto não encontrado")
        }

    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercicio 7
// Fluxos de verificação do exercicio 3

// Exercicio 8
// Fluxos de verificação do exercicio 5

// Exercicio 9
// Fluxos de verificação do exercicio 6

// Exercicio 10

app.get("/products/search", (req: Request, res: Response) => {
    try {
        let search: string = req.query.name as string

        if (!search) {
            res.send(products)
        } else {
            const result = products.filter((product) => {
                return product.name.includes(search.toLowerCase())
            })

            if (result.length===0) {
                res.statusCode = 404
                throw new Error("Produto não encontrado")
            } else {
                res.send(result)
            }
        }
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

// Exercicio 11
app.put("/products/edit2", (req: Request, res: Response) => {
    try {
        const productId = req.body.id
        const price = req.body.price
        const name = req.body.name as string

        console.log(productId, price, name)
        if (!productId) {
            res.statusCode = 400
            throw new Error("id não informado")
        }

        if (!name && !price) {
            res.statusCode = 400
            throw new Error("Preço e nome não informados")
        }

        const checkProductId = products.find((product) => {
            return product.id === productId
        })

        if (checkProductId) {
            if (price) {
                if (price <= 0 || typeof (price) !== "number") {
                    console.log("chegou aaqui")
                    res.statusCode = 400
                    throw new Error("Informe um preço válido")
                } else {
                    checkProductId.price = price
                }
            }
            if (name) {
                checkProductId.name = name
            }
            res.send(products)

        } else {
            res.statusCode = 404
            throw new Error("Produto não encontrado")
        }
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

import { Request, Response } from 'express'
import app from './app'
import connection from './connection';

// Exercicio 1
// a) Um array com outros dois dentro, um contem o as informações pedidas e o outros informações sobre o banco de dados
// b)
app.get("/actor/:name", async (req: Request, res: Response) => {
    try {
        const [result] = await connection.raw(`
            SELECT * FROM Actor
            WHERE name = "${req.params.name}" 
        `)
        res.send(result)
    } catch (error) {
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

// c)
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const [result] = await connection.raw(`
        SELECT COUNT(*), gender
        FROM Actor
        GROUP BY gender
        `)
        res.send(result)
    } catch (error) {
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

// Exercicio 2
// a)
app.put("/actor/:id", async (req: Request, res: Response) => {
    try {
        console.log(req.body.salary)
        await connection("Actor").update({
            salary: req.body.salary
        }).where({
            id: req.params.id
        })

        res.send("salário atualizado!")
    } catch (error) {
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

// b)
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor").delete().where({
            id: req.params.id
        })

        res.send("Usuário deletado!")
    } catch (error) {
        console.log(error)
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

// C)
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const result = await connection("Actor").avg('salary')
            .where({
                gender: req.body.gender
            })

        res.send(result)
    } catch (error) {
        console.log(error)
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

// Exercicio 3
// a)
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
        const result = await connection("Actor").select("*")
            .where({
                id: req.params.id
            })
        res.send(result)
    } catch (error) {
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

//b)
app.get("/actor", async (req: Request, res: Response) => {
    try {
        const result = await connection("Actor").count("*")
            .where({
                gender: req.query.gender
            })
        res.send(result)
    } catch (error) {
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

app.get("/actor", async (req: Request, res: Response) => {
    try {
        console.log(req.query.gender)
        const result = await connection.raw(`
        SELECT COUNT(*) FROM Actor
        WHERE gender = "${req.query.gender}" 
    `
        )

        res.send(result)
    } catch (error) {
        // console.log(error)
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

// Exercicio 4
app.post("/actor", async (req: Request, res: Response) => {
    try {
        const result = await connection("Actor").insert({
            id: req.body.id,
            name: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.birthDate,
            gender: req.body.gender
        })

        res.send("Ator criado!")
    } catch (error) {
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})
//a)
app.put("/actor/:id", async (req: Request, res: Response) => {
    try {
        console.log(req.body.salary)
        await connection("Actor").update({
            salary: req.body.salary
        }).where({
            id: req.params.id
        })

        res.send("salário atualizado!")
    } catch (error) {
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})

// b)
app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
        await connection("Actor").delete().where({
            id: req.params.id
        })

        res.send("Usuário deletado!")
    } catch (error) {
        console.log(error)
        res
            .status(500)
            .send("Um erro inesperado aconteceu");
    }
})
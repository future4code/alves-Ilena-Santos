import { Request, Response } from 'express'
import insertUserInToDoList from '../data/insertUserInToDoList'

export default async function createUser(req: Request, res: Response) {
    try {
        const { name, nickname, email } = req.body

        if (!name) {
            res.statusCode = 400
            throw new Error("Informe o nome")
        }
        if (!nickname) {
            res.statusCode = 400
            throw new Error("Informe o apelido")
        }
        if (!email) {
            res.statusCode = 400
            throw new Error("Informe um email")
        }

        await insertUserInToDoList(name, nickname, email)

        res.send("Usuário cadastrado!")
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}
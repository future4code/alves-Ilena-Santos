import { Request, Response } from 'express'
import createTask from '../data/createTask'

export default async function createUser(req: Request, res: Response) {
    try {
        const { title, description, limitDate, creatorUserId } = req.body

        if (!title) {
            res.statusCode = 400
            throw new Error("Informe o título")
        }
        if (!description) {
            res.statusCode = 400
            throw new Error("Informe a descrição")
        }
        if (!limitDate) {
            res.statusCode = 400
            throw new Error("Informe a data limite")
        }
        if (!creatorUserId) {
            res.statusCode = 400
            throw new Error("Informe o id do usuário")
        }

        await createTask(title, description, limitDate, creatorUserId)

        res.send("Tarefa inserida!")
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}
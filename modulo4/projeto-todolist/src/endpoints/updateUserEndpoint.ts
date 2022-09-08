import { Request, Response } from 'express'
import updadeUser from '../data/updateUser'


export default async function updadeUserEndpoint(req: Request, res: Response) {
    try {
        const id = Number(req.params.id)
        const { name, nickname, email } = req.body

        if (name === "") {
            res.statusCode = 400
            throw new Error("Nome inválido")
        }
        if (nickname === "") {
            res.statusCode = 400
            throw new Error("Apelido inválido")
        }
        if (email === "") {
            res.statusCode = 400
            throw new Error("Email inválido")
        }

        await updadeUser(id, name, nickname, email)

        res.send("usuário atualizado")
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}
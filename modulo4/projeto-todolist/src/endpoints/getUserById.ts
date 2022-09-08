import { Request, Response } from 'express'
import getUser from '../data/getUser'


export default async function createUser(req: Request, res: Response) {
    try {
        const id = Number(req.params.id)
        const result = await getUser(id)

        if (result.length === 0) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        res.send(result[0])
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}
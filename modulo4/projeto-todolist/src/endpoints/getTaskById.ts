import { Request, Response } from 'express'
import getTask from '../data/getTask'
import moment from "moment"


export default async function getTaskById(req: Request, res: Response) {
    try {
        const id = Number(req.params.id)
        const result = await getTask(id)

        if (result.length === 0) {
            res.statusCode = 404
            throw new Error("Tarefa não encontrada")
        }

        res.send({
            taskId: result[0].id,
            title: result[0].title,
            description: result[0].description,
            limitDate: moment(result[0].limit_date, "YYYY-MM-DD").format("DD/MM/YYYY"),
            status: result[0].status,
            creatorUserId: result[0].creator_user_id,
            creatorUserNickname: result[0].nickname
        })
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}


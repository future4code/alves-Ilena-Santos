import { Request, Response } from "express";
import selectUsers from "../data/selectUsers";

export default async function getUsers(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const result = await selectUsers()

        res.send(result)

    } catch (error: any) {

        console.log(error.message || error.sqlMessage);
        res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
    }
}
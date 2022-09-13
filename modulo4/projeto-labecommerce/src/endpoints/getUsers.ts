import { Request, Response } from "express";
import selectPurchasesById from "../data/selectPurchasesById";
import selectUsers from "../data/selectUsers";

export default async function getUsers(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const result = await selectUsers()

        for (const user of result) {
            try {

                const purchases = await selectPurchasesById(user.id)

                user.purchases = purchases

            } catch (error) {
                user.purchases = []
            }
        }

        res.send(result)


    } catch (error: any) {

        res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
    }
}
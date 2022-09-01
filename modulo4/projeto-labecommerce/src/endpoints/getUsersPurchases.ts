import { Request, Response } from "express";
import selectPurchasesById from "../data/selectPurchasesById";


export default async function getUsersPurchases(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const user_id = req.params.user_id

        const result = await selectPurchasesById(user_id)

        res.send(result)

    } catch (error: any) {

        res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
    }
}
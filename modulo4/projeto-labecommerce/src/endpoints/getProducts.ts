import { Request, Response } from "express";
import selectProducts from "../data/selectProducts";

export default async function getProducts(
    req: Request,
    res: Response
): Promise<void> {
    try {
        let order = req.query.order as string
        const search = req.query.search as string || ""

        if (!order) {
            order = "ASC"
        }

        const result = await selectProducts(order, search)

        res.send(result)

    } catch (error: any) {

        res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
    }
}
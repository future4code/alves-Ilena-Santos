import { Request, Response } from "express";
import selectProducts from "../data/selectProducts";

export default async function getProducts(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const result = await selectProducts()

        res.send(result)

    } catch (error: any) {

        console.log(error.message || error.sqlMessage);
        res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
    }
}
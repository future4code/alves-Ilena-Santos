import { connection } from "./connection";
import { Request, Response } from "express";

export default async function selectProductsById(id: string) {

    const result = await connection("labecommerce_products")
        .select("*").where({
            id: id
        })

    return result[0]

} 
import { connection } from "./connection";

export default async function selectProducts(order: string, search: string) {
    const result = await connection("labecommerce_products")
        .select("*")
        .orderBy("name", order)
        .where("name", "LIKE", `%${search}%`)

    return result
} 
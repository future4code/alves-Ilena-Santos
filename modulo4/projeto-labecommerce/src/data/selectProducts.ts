import { connection } from "./connection";

export default async function selectProducts() {
    const result = await connection("labecommerce_products")
        .select("*")

    return result
} 
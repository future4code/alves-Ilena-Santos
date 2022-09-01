import { connection } from "./connection";

export default async function insertProduct(id: string, name: string, price: number, image_url: string) {
    const result = await connection("labecommerce_products")
        .insert({
            id,
            name,
            price,
            image_url
        })
    return result
} 
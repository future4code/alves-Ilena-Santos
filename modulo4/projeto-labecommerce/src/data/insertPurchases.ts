import { connection } from "./connection";

export default async function insertPurchases(id: string, user_id: string, product_id: string, quantity: number, total_price: number) {
    const result = await connection("labecommerce_purchases")
        .insert({
            id,
            user_id,
            product_id,
            quantity,
            total_price
        })
    return result
} 
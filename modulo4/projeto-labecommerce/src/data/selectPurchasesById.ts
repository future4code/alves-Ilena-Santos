import { connection } from "./connection";

export default async function selectPurchasesById(user_id: string) {
    const result = await connection("labecommerce_purchases")
        .select("labecommerce_products.name", "product_id", "quantity", "total_price")
        .where({
            user_id: user_id
        })
        .join("labecommerce_products", "labecommerce_purchases.product_id",
            "labecommerce_products.id")

    return result
} 
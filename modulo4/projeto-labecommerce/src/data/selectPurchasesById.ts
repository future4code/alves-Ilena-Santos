import { connection } from "./connection";

export default async function selectPurchasesById(user_id:string) {
    const result = await connection("labecommerce_purchases")
        .select("*").where({
            user_id: user_id
        })

    return result
} 
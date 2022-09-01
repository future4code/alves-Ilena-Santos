import { connection } from "./connection";

export default async function selectUserById(user_id:string) {
    const result = await connection("labecommerce_users")
        .select("*")
        .where({
            id: user_id
        })

    return result
} 
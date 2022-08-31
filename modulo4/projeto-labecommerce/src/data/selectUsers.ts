import { connection } from "./connection";

export default async function selectUsers() {
    const result = await connection("labecommerce_users")
        .select("*")

    return result
} 
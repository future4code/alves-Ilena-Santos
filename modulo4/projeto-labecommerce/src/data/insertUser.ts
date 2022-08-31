import {connection} from "./connection";

export default async function insertUser(id: string, name: string, email:string, password:string) {
    const result = await connection("labecommerce_users")
        .insert({
            id,
            name,
            email,
            password
        })
    return result
} 
import connection from "../connection";

export default async function getUser(id: number) {
    const result = await connection("TodoListUser")
        .select("id", "nickname").where({
            id: id
        })
    return result
}
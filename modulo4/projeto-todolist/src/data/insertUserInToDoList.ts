import connection from "../connection";

export default async function insertUserInToDoList(name: string, nickname: string, email: string) {
    const result = await connection("TodoListUser")
        .insert({
            name,
            nickname,
            email
        })
    return result
}
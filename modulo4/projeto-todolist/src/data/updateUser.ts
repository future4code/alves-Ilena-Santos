import connection from "../connection";

export default async function updadeUser(id: number, name: string | null, nickname: string | null, email: string | null) {

    await connection("TodoListUser")
        .update({
            name: name,
            nickname: nickname,
            email: email
        }).where({
            id: id
        })

}



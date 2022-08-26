import connection from "../connection";

export default async function createTask(title: string, description: string, limitDate: string, creatorUserId: number) {
    const result = await connection("TodoListTask")
        .insert({
            title,
            description,
            limit_date: limitDate.split("/").reverse().join("-"),
            creator_user_id: creatorUserId
        })

    return result
}
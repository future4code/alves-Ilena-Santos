import connection from "../connection";

export default async function getTask(id: number) {
    const result = await connection("TodoListTask")
        .where("TodoListTask.id", id)
        .select("TodoListTask.id", "title", "description", "limit_date", "status", "TodoListTask.creator_user_id", "nickname")
        .join("TodoListUser", "TodoListTask.creator_user_id", "TodoListUser.id")
    return result
}


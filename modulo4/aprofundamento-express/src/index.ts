import express, { Request, Response } from 'express'
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());


// Exercicio 1

app.get("/ping", (req: Request, res: Response) => {
    res.send("pong")
})

// Exercicio 2

type Task = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Exercicio 3

let toDoList: Task[] = [
    { userId: 1, id: 1, title: "comprar comida", completed: true },
    { userId: 1, id: 2, title: "alimentar os gatos", completed: false },
    { userId: 1, id: 3, title: "estudar", completed: true },
    { userId: 2, id: 4, title: "treinar", completed: false },
    { userId: 2, id: 5, title: "ir ao médico", completed: false },
    { userId: 2, id: 6, title: "lavar o carro", completed: true },
]

// Exercicio 4

app.get("/incompleteTasks", (req: Request, res: Response) => {
    const getIncompleteTasks = toDoList.filter((task) => {
        return task.completed === false
    })
    const result = getIncompleteTasks.flat()
    res.send(result)
})

// Exercicio 5
app.post("/tasks", (req: Request, res: Response)=>{
    const {userId, title,completed} = req.body
    const user = toDoList.find((task)=> task.userId === userId)

    if(user) {
        toDoList.push({
            userId: userId,
            id: Date.now(),
            completed: completed,
            title: title
        })

        res.send("Tarefa criada!")
    } else {
        toDoList.push({
            userId: Date.now() + 10,
            id: Date.now(),
            completed: completed,
            title: title
        })
        res.send("Tarefa e usuário criados!")
    }
})

// Exercicio 6
app.put("/tasks/:taskId", (req: Request, res: Response)=>{
    const taskId = req.params.taskId
    const checkTaskId = toDoList.find((task)=>task.id === Number(taskId))

    if(checkTaskId) {
        const editedTask = toDoList.map((task) =>{
         if(task.id === Number(taskId)) {
             task.completed = !task.completed
             return task 
         } 
        }) 

        if (editedTask) {
            toDoList = editedTask as Task[]
            res.send("Tarefa editada")
        }
    } else{
        res.status(404).send("Usuario não foi encontrado")
    }
})

// Exercicio 7
app.delete("/tasks/:taskId", (req: Request, res: Response)=>{
    const userId = req.headers.user
    const taskId = req.params.taskId
    const checkUserId = toDoList.find((task)=>task.userId === Number(userId))
    const checkTaskId = toDoList.find((task)=>task.id === Number(taskId))

    if(checkUserId) {
        if(checkTaskId) {
            const newToDoList = toDoList.filter((task)=>{
                    return task.id !== Number(taskId)
            })

            toDoList = newToDoList
            res.send("Tarefa removida!")
        } else{
            res.status(404).send("Tarefa não encontrada")
        }

    } else {
        res.status(404).send("Usuario não foi encontrado")
    }

})

// Exercicio 8
    app.get("/tasks", (req: Request, res: Response)=>{
        const userId = req.headers.user
        const checkUserId = toDoList.find((task)=>task.userId === Number(userId))

        if (checkUserId) {
            const getTasksByUser = toDoList.filter((task)=>{
                return task.userId === Number(userId)
            })

            res.send(getTasksByUser)
        } else {
            res.status(404).send("Usuario não foi encontrado")
        }
    }
)

// Exercicio 9
// Documentação no postman 
// link : https://documenter.getpostman.com/view/21552877/VUjTm4Kr

// Exercicio 10
app.get("/allTasks", (req: Request, res: Response)=>{
    const userId = req.headers.user
    const checkUserId = toDoList.find((task)=>task.userId === Number(userId))

    if (checkUserId) {
        const getTasksByUser = toDoList.filter((task)=>{
            return task.userId === Number(userId)
        })

        const getOthersTasks = toDoList.filter((task)=>{
            return task.userId !== Number(userId)
        })

    const allTasks = {
        all:{
            selectedUser: getTasksByUser,
            others: getOthersTasks
        }
    }
        res.send(allTasks)

    } else {
        res.status(404).send("Usuario não foi encontrado")
    }
}
)

// Exercicio 11

app.post("/tasks/save", (req: Request, res: Response)=>{
    const fs = require("fs")
    let toDoList2: Task[] = JSON.parse(fs.readFileSync(__dirname + "/save.json"))
    const {userId, title,completed} = req.body
    const user = toDoList2.find((task)=> task.userId === userId)

    if(user) {
        toDoList2.push({
            userId: userId,
            id: Date.now(),
            completed: completed,
            title: title
        })
        const newToDoList2 = JSON.stringify(toDoList2)
        fs.writeFileSync(__dirname + "/save.json", newToDoList2)


        res.send("Tarefa criada!")
    } else {
        toDoList2.push({
            userId: Date.now() + 10,
            id: Date.now(),
            completed: completed,
            title: title
        })
        const newToDoList2 = JSON.stringify(toDoList2)
        fs.writeFileSync(__dirname + "/save.json", newToDoList2)
        res.send("Tarefa e usuário criados!")
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
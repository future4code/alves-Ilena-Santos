import express, { Request, Response } from 'express'
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// Exercicio 1

app.get("/", (req: Request, res: Response) => {
    res.send("1,2,3 testando!")
})

// Exercicio 2

type User = {
    id: number | string,
    name: string,
    phone: number,
    email: string,
    website: string
}

// Exercicio 3

let users: User[] = [
    { id: 1, name: "fulano", phone: 993949623, email: "fulano@gmail", website: "www.fulano.com.br" },
    { id: 2, name: "fulaninha", phone: 993949583, email: "fulaninha@gmail", website: "www.fulaninha.com.br" },
    { id: 3, name: "joao", phone: 993929693, email: "joao@gmail", website: "www.joao.com.br" },
    { id: 4, name: "maria", phone: 993935673, email: "maria@gmail", website: "www.maria.com.br" }
]

// Exercicio 4

app.get("/users", (req: Request, res: Response) => {
    const getUsers = users.map((user) => {
        return user
    })
    const result = getUsers.flat()
    console.log("result", result)
    res.send(result)
})

// Exercicio 5

type Post = {
    id: number | string,
    title: string,
    body: string,
    userId: number | string,
}

// Exercicio 6

let posts: Post[] = [
    { id: 11, title: "A prática cotidiana", body: "A prática cotidiana prova que a execução dos pontos do programa nos obriga à análise do investimento em reciclagem técnica.", userId: 1 },
    { id: 12, title: "complexidade dos estudos", body: "Desta maneira, a complexidade dos estudos efetuados auxilia a preparação e a composição do fluxo de informações.", userId: 2 },
    { id: 13, title: "modelo estrutural", body: "Caros amigos, o novo modelo estrutural aqui preconizado assume importantes posições no estabelecimento das novas proposições.", userId: 3 },
    { id: 14, title: "renovação processual", body: "Percebemos, cada vez mais, que a necessidade de renovação processual promove a alavancagem do remanejamento dos quadros funcionais.", userId: 4 }

]
// Fora do array de usuários porque o código fica mais limpo, porém para o entendimento acredito que ficaria melhor dentro do array de usuários.

// Exercicio 7
app.get("/posts", (req: Request, res: Response) => {
    const getPosts = posts.map((post) => {
        return post
    })
    const result = getPosts.flat()
    console.log("result", result)
    res.send(result)
})

// Exercicio 8

app.get("/posts/:user", (req: Request, res: Response) => {
    const userId = req.params.user
    const getPostsByUserId = posts.filter((post) => {
        return post.userId === Number(userId)
    })

    console.log("result", getPostsByUserId)
    res.send(getPostsByUserId)
})

// Exercicio 9 

app.delete("/post/:postId", (req: Request, res: Response) => {
    const postId = req.params.postId

    const deletePostById = posts.filter((post) => {
        return post.id !== Number(postId)
    })
    posts = deletePostById
    res.send("post deletado!")
})

// Exercicio 10 

app.delete("/user/:userId", (req: Request, res: Response) => {
    const userId = req.params.userId

    const deleteUserById = users.filter((user) => {
        return user.id !== Number(userId)
    })
    users = deleteUserById
    res.send("usuário deletado!")
})
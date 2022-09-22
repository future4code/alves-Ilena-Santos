import { likes } from "../database/migrations/data"
import { PostDatabase } from "../database/PostDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { ParamsError } from "../errors/ParamsError"
import { Post } from "../models/Post"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}
   
    public createPost = async (input:any) => {
        const { token, content } = input

        if (!content) {
            throw new ParamsError()
        }
        if (content.length < 5) {
            throw new Error("Conteúdo deve conter pelo menos 5 caracteres")
        }

        if (!token) {
            throw new AuthenticationError();
        }

        const id = this.idGenerator.generate()

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new AuthenticationError();
        }

        const post = new Post(
          id,
          content,
          payload.id,
        )

        await this.postDatabase.createPost(post)

        const response = {
            message: "Postagem feita!",
        }

        return response
    }

    public getPosts = async (input:any) => {
        const { token } = input

        if (!token) {
            throw new AuthenticationError();
        }

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new AuthenticationError();
        }

        const allPosts = await this.postDatabase.selectPosts()

        let allPostsAndLikes : any= []

        for (const post of allPosts) {
            try {
                
                const teste = await this.postDatabase.selectLikesByPost(post.id)

                if (teste > 0) {
                    allPostsAndLikes = [...allPostsAndLikes, {id: post.id, content: post.content, user_id:post.user_id,likes: teste}]
                } else {
                   allPostsAndLikes = [...allPostsAndLikes,{id: post.id, content: post.content, user_id:post.user_id,likes:0}]
                }

            } catch (error) {
                console.log(error)
            }
        }

        const response = {
            post: allPostsAndLikes,
        }

        return response
    }
}
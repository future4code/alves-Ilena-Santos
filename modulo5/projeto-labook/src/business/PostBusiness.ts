import { likes } from "../database/migrations/data"
import { PostDatabase } from "../database/PostDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { NotFoundError } from "../errors/NotFoundError"
import { ParamsError } from "../errors/ParamsError"
import { ILikeDB, Post } from "../models/Post"
import { USER_ROLES } from "../models/User"
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


    public deletePost = async (input:any) => {
        const { token, postId } = input

        if(!postId) {
            throw new ParamsError()
        }

        if (!token) {
            throw new AuthenticationError();
        }

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new AuthenticationError();
        }

        const post = await this.postDatabase.selectPostById(postId)

        if (!post) {
            throw new NotFoundError()
        }

        let response = {}

        if (payload.role === USER_ROLES.ADMIN) {
            await this.postDatabase.deletePostById(postId)
            response = {
                message: "Post deletado!"
            }
        }

        else {
            if(post.user_id !== payload.id) {
                throw new Error("Post pertence a outro usuário!")
            }

            await this.postDatabase.deletePostById(postId)
            response = {
                message: "Post deletado!"
            }
        }

        return response
    }


    public likePost = async (input:any) => {
        const { token, postId } = input

        if(!postId) {
            throw new ParamsError()
        }

        if (!token) {
            throw new AuthenticationError();
        }

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new AuthenticationError();
        }

        const post = await this.postDatabase.selectPostById(postId)

        if (!post) {
            throw new NotFoundError()
        }

        const alreadyLiked = await this.postDatabase.checkLike(postId, payload.id)

        if(alreadyLiked) {
            throw new Error("Esse post já foi curtido por você")
        }

        const id = this.idGenerator.generate()

        const like: ILikeDB = {
            id: id,
            post_id: post.id,
            user_id: payload.id

        }

        await this.postDatabase.giveLike(like)

        const response = {
            message: "post curtido!"
        }

        return response

    }

    public dislikePost = async (input:any) => {
        const { token, postId } = input

        if(!postId) {
            throw new ParamsError()
        }

        if (!token) {
            throw new AuthenticationError();
        }

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new AuthenticationError();
        }

        const post = await this.postDatabase.selectPostById(postId)

        if (!post) {
            throw new NotFoundError()
        }

        const alreadyLiked = await this.postDatabase.checkLike(postId, payload.id)

        if(!alreadyLiked) {
            throw new Error("Você não curtia esse post")
        }


        await this.postDatabase.removeLike(alreadyLiked.id)

        const response = {
            message: "like removido!"
        }

        return response

    }

}
import { IPostDB, Post, ILikeDB } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public toPostDBModel = (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
           user_id: post.getUserId()
        }

        return postDB
    }

    public createPost = async (post: Post) =>{
        const postDB = this.toPostDBModel(post)

        await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
        .insert(postDB)
    }

    public selectPosts = async () =>{
       
       const posts =  await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
        .select("*")

        return posts

    }

    public selectLikesByPost = async (post_id: string) =>{
       
        const posts =  await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
         .select("*")
         .where({
            post_id
         })
 
         return posts.length
 
     }

     public selectPostById = async (id:string) =>{
        const posts =  await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
        .select("*")
        .where({
            id
        })

        return posts[0]
    }

    public deletePostById = async (id:string) =>{
        await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
        .delete("*")
        .where({
            id
        })
    }

    public checkLike = async (postId:string, userId:string) =>{
        const result = await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
        .select("*")
        .where({
            post_id: postId
        })
        .andWhere({
            user_id: userId
        })

        return result[0]

    }


    public giveLike = async(like: ILikeDB) =>{
        await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
        .insert(like)
    }

    public removeLike = async (id:string) =>{
        await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
        .delete("*")
        .where({
            id
        })
    }
}
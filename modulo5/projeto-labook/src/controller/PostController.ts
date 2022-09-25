import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public createPost = async (req: Request, res: Response) =>{
        try {
            const input  = {
                content: req.body.content,
                token: req.headers.authorization
            }

            const response = await this.postBusiness.createPost(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public getPosts = async (req: Request, res: Response) =>{
        try {
            const input  = {
                token: req.headers.authorization
            }

            const response = await this.postBusiness.getPosts(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public deletePost = async (req: Request, res: Response) =>{
        try {
            const input  = {
                token: req.headers.authorization,
                postId: req.body.postId
            }

            const response = await this.postBusiness.deletePost(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public likePost = async (req: Request, res: Response) =>{
        try {
            const input  = {
                token: req.headers.authorization,
                postId: req.body.postId
            }

            const response = await this.postBusiness.likePost(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public dislikePost = async (req: Request, res: Response) =>{
        try {
            const input  = {
                token: req.headers.authorization,
                postId: req.body.postId
            }

            const response = await this.postBusiness.dislikePost(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    

}
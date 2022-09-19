import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {

    public signup = async (req: Request, res: Response) =>{
        try {
            const input : any = {
                name : req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.signup(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(error.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input : any = {
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.login(input)
            
            res.status(201).send(response)
            
        } catch (error:any) {
            res.status(error.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    public getUsers = async (req: Request, res: Response) =>{
        try {
            const input : any = {
                token: req.headers.authorization,
                search: req.query.search || "",
                page: req.query.page
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.getUsers(input)
            
            res.status(201).send(response)
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    public deleteUserAccount = async (req: Request, res: Response) =>{
        try {
            const input : any = {
                id: req.params.id,
                token: req.headers.authorization
            }

            const userBusiness = new UserBusiness()
            const response = await userBusiness.deleteUserAccount(input)
            
            res.status(201).send(response)
        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message || error.sqlMessage)
        }

    }
}
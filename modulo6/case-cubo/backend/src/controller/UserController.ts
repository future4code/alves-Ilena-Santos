import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public signup = async (req: Request, res: Response) => {
        try {
            const input = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                participation: req.body.participation
            }

            const response = await this.userBusiness.signup(input)

            res.status(200).send(response)
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getUsers = async (req: Request, res: Response) => {
        try {
           
            const response = await this.userBusiness.getUsers()

            res.status(200).send(response)
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }
}
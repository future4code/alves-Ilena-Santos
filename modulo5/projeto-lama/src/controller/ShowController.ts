import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    public registerShow = async (req: Request, res: Response) =>{
        try {
            const input = {
                band: req.body.band,
                starts_at: req.body.starts_at,
                token: req.headers.authorization
            }

            const response = await this.showBusiness.registerShow(input)
            res.status(200).send(response)
            
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public getShows = async (req: Request, res: Response) =>{
        try {
            const input = {
                token: req.headers.authorization
            }

            const response = await this.showBusiness.getShows(input)
            res.status(200).send(response)
            
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

    public ticketReservation = async (req: Request, res: Response) =>{
        try {
            const input = {
                token: req.headers.authorization,
                showId: req.body.showId
            }

            const response = await this.showBusiness.ticketReservation(input)
            res.status(200).send(response)
            
        } catch (error) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }

}
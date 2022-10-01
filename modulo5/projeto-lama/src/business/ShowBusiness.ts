import { ShowDatabase } from "../database/ShowDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { AuthorizationError } from "../errors/AuthorizationError"
import { NotFoundError } from "../errors/NotFoundError"
import { ParamsError } from "../errors/ParamsError"
import { Show } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }

    public registerShow = async (input: any) => {
        const { band, starts_at, token } = input

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new AuthenticationError();
        }

        if (!band || typeof band !== "string") {
            throw new ParamsError("Parâmetro 'band' inválido")
        }

        if (!starts_at || typeof starts_at !== "string" || new Date(starts_at) < new Date("2022-12-05") ) {
            throw new ParamsError("Parâmetro 'starts_at' inválido")
        }

        if(payload.role !== USER_ROLES.ADMIN) {
            throw new AuthorizationError()
        }

        const id = this.idGenerator.generate()

        const show = new Show(
            id,
            band,
            new Date(starts_at)
        )

        const checkShowDate = await this.showDatabase.checkShowDate(starts_at)

        if (checkShowDate) {
            throw new ParamsError("Já existe um show nessa data")
        }

        await this.showDatabase.createShow(show)

        const response = {
            message: "Show cadastrado com sucesso",
        }

        return response

    }

    public getShows = async (input: any) => {
        const { token } = input

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new AuthenticationError();
        }

        const shows = await this.showDatabase.selectShows()

        const response = {
            shows: shows,
        }

        return response

    }

    public ticketReservation = async (input: any) => {
        const { token, showId } = input

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new AuthenticationError();
        }
        
        const checkIfShowExist = await this.showDatabase.selectShowById(showId)
        
        
        if(!checkIfShowExist){
            throw new NotFoundError("Show não encontrado")
        }
        
        const numberOfTicketsReserved = await this.showDatabase.selectReservedTickets(showId)
        
        if(numberOfTicketsReserved === 5000) {
            throw new Error("Todos os ingressos para esse show já estão reservados")
        }
        
        const id = this.idGenerator.generate()
        await this.showDatabase.createReservation(id, payload.id, showId)
        
        const newQuatity = 5000 - numberOfTicketsReserved - 1
        await this.showDatabase.updateTicketsQuantity(newQuatity, showId)

        const response = {
            message: "Reserva feita com sucesso",
        }

        return response

    }


    public deleteReservation = async (input: any) => {
        const { token, showId } = input

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload) {
            throw new AuthenticationError();
        }
        
        const checkIfShowExist = await this.showDatabase.selectShowById(showId)
        
        
        if(!checkIfShowExist){
            throw new NotFoundError("Show não encontrado")
        }

        const checkReservation = await this.showDatabase.selectUserReservation(showId, payload.id)

        if(!checkReservation){
            throw new NotFoundError("Você não possui reservas para esse show")
        }

        await this.showDatabase.removeReservation(showId, payload.id)
        
        const numberOfTicketsReserved = await this.showDatabase.selectReservedTickets(showId)
        const newQuatity = checkIfShowExist.tickets + numberOfTicketsReserved + 1
        await this.showDatabase.updateTicketsQuantity(newQuatity, showId)

        const response = {
            message: "Reserva cancelada",
        }

        return response

    }

    
}
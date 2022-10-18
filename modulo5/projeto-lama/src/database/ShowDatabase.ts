import { IShowDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"


    public toShowDBModel = (show: Show) => {
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt(),
            tickets: show.getTickets()
        }

        return showDB
    }

    public createShow = async (show: Show) => {
        const showDB = this.toShowDBModel(show)

        await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS)
            .insert(showDB)
    }

    public checkShowDate = async (starts_at: any) =>{
        const result = await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS)
        .select("*")
        .where({
            starts_at
        })

        return result[0]
    }

    public selectShows = async () =>{
        const result = await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS)
        .select("*")

        return result
    }

    public selectShowById = async (showId: string) =>{
        const result = await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS)
        .select("*")
        .where({
            id:showId
        })

        return result[0]
    }

    public createReservation = async (id: string, user_id:string, show_id:string) => {

        await BaseDatabase.connection(ShowDatabase.TABLE_TICKETS)
            .insert({
                id,
                user_id,
                show_id
            })
    }

    public selectReservedTickets = async ( show_id:string): Promise<number> => {

        const result = await BaseDatabase.connection(ShowDatabase.TABLE_TICKETS)
        .select("*")
        .where({
            show_id
        })

        return result.length
    }

    public selectUserReservation = async ( show_id:string, user_id:string) => {

        const result = await BaseDatabase.connection(ShowDatabase.TABLE_TICKETS)
        .select("*")
        .where({
            show_id
        })
        .andWhere({
            user_id
        })

        return result[0]
    }

    public removeReservation = async ( show_id:string, user_id:string) => {

        await BaseDatabase.connection(ShowDatabase.TABLE_TICKETS)
        .delete("*")
        .where({
            show_id
        })
        .andWhere({
            user_id
        })
    }

    public updateTicketsQuantity = async (tickets:number, showId: string) =>{
        await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS)
            .update({
                tickets
            })
            .where({
                id: showId
            })
    }
}
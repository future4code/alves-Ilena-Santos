import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IShowDB, Show } from "../../src/models/Show"

export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"


    public toShowDBModel = (show: Show) => {
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt(),
            tickets: show.getTickets()
        }

        return showDB
    }

    public createShow = async (show: Show) => { }

    public checkShowDate = async (starts_at: any) => {
        switch (starts_at) {
            case "2022-12-10":
                return undefined

        }

    }

    public selectShows = async () => {
        const showsDB: IShowDB[] = [
            {
                id: "201",
                band: "Foo Fighters",
                starts_at: new Date("2022-12-05T03:00:00.000Z"),
                tickets: 5000
            },
            {
                id: "202",
                band: "System of a Down",
                starts_at: new Date("2022-12-06T03:00:00.000Z"),
                tickets: 5000
            },
            {
                id: "203",
                band: "Evanescence",
                starts_at: new Date("2022-12-07T03:00:00.000Z"),
                tickets: 5000
            }

        ]

        return showsDB

    }

    public selectShowById = async (showId: string): Promise<IShowDB | undefined> => {
        switch (showId) {
            case "201":
                return {
                    id: "201",
                    band: "Foo Fighters",
                    starts_at: new Date("2022-12-05T03:00:00.000Z"),
                    tickets: 4995
                }
            default:
                return undefined
        }
    }

    public createReservation = async (id: string, user_id: string, show_id: string) => { }

    public selectReservedTickets = async (show_id: string) => {
        return 50
    }

    public selectUserReservation = async (show_id: string, user_id: string) => {

        const reservation = {
            id: "id-mock",
            show_id: show_id,
            user_id: user_id
        }

        return reservation
    }

    public removeReservation = async (show_id: string, user_id: string) => { }

    public updateTicketsQuantity = async (tickets: number, showId: string) => { }
}
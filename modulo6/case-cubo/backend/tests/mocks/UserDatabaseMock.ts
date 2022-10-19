import { IUserDB } from "../../src/models/User"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "Cubo_Users"

    public insertUser = async (user: IUserDB) => {

    }

    public selectParticipationSum = async () => {
        return 40
    }

    public selectUsers = async () => {
        const users: IUserDB[] = [
            {
                first_name: "Carlos",
                last_name: "Moura",
                participation: 5
            },
            {
                first_name: "Fernanda",
                last_name: "Oliveira",
                participation: 15
            },
            {
                first_name: "Hugo",
                last_name: "Silva",
                participation: 20
            }

        ]

        return users
    }
}
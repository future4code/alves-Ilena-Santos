import { IUserDB, User, USER_ROLES } from "../../src/models/User"
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "Lama_Users"

    public toUserDBModel = (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        return userDB
    }

    public createUser = async (user: User) => { }

    public selectUserByEmail = async (email: string) : Promise<IUserDB| undefined> =>{
        switch (email) {
            case "usermock@gmail.com":
                const normalUser: IUserDB = {
                    id: "id-mock",
                    name: "User Mock",
                    email: "usermock@gmail.com",
                    password: "hash-mock",
                    role: USER_ROLES.NORMAL
                }

                return normalUser

            case "astrodev@gmail.com":
                const adminUser: IUserDB = {
                    id: "id-mock",
                    name: "Astrodev",
                    email: "astrodev@gmail.com",
                    password: "hash-bananinha",
                    role: USER_ROLES.ADMIN
                }

                return adminUser

            default:
                return undefined
        }
    }
}
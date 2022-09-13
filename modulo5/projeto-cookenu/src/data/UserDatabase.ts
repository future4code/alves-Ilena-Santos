import User from "../model/User";
import { IUserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    public async createUser(user: User) {

        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await this.getConnection().insert(userDB).into("cookenu_users")
    }


    public async getUserByEmail(email: string): Promise<IUserDB | undefined> {
        const result: IUserDB[] = await this.getConnection()
            .select("*")
            .from("cookenu_users")
            .where({ email })

        return result[0]
    }

   
    public async getUserById(id: string) {
        const result: IUserDB[] = await this.getConnection()
            .select("*")
            .from("cookenu_users")
            .where({ id })

        return result[0]
    }

  
}

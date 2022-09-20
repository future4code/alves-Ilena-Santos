import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

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

    public createUser = async (user: User) => {
        const userDB = this.toUserDBModel(user)

        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }

    public selectUserByEmail = async (email: string) =>{
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .select("*")
        .where({
            email
        })

        return result[0]
    }

    public selectUserByName = async (name: string, page:number) =>{
        const size = 2
        const offset = size * (page - 1)
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .select("id", "name", "email")
        .where("name", "LIKE", `%${name}%`)
        .orderBy("name", "ASC")
        .limit(size)
        .offset(offset)
        
        return result
    }

    public selectUserById = async (id: string) =>{
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .select("*")
        .where({
           id
        })

        return result[0]
    }

    public deleteUser = async (id:string) =>{

        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .delete("*")
        .where({
            id
        })
    }

    public updateUser = async (id:string, name: string, email: string, password: string) =>{
        await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .update({
            name,
            password, 
            email
        })
        .where({
            id
        })
    }
}
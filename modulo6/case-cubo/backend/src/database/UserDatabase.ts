import { IUserDB } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Cubo_Users"

    public insertUser = async (user:IUserDB) =>{
         await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .insert(user)
    }

    public selectParticipationSum = async () =>{
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
       .sum("participation")
       return result[0]['sum(`participation`)']
   }

   public selectUsers = async () =>{
    const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
   .select("*")

   return result
}
}
import { UserDatabase } from "../database/UserDatabase"
import { ParamsError } from "../errors/ParamsError"
import { IUserDB } from "../models/User"


export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase
    ) {}

    public signup = async (input:any) => {
        const {firstName,lastName} = input

        const participation = Number(input.participation)
       
        if (!firstName) {
            throw new ParamsError("Parâmetro 'first name' inválido")
        }
        if (!lastName) {
            throw new ParamsError("Parâmetro 'last name' inválido")
        }
        if (!participation || participation === NaN) {
            throw new ParamsError("Parâmetro 'participation' inválido")
        }

        const participationSum = await this.userDatabase.selectParticipationSum()

        if (participation + participationSum > 100) {
            throw new ParamsError("Parâmetro 'participation' inválido. A participação total dos usuários deve ser menor ou igual a 100%")
        }

        const user:IUserDB ={
            first_name: firstName,
            last_name:lastName,
            participation
        }

        await this.userDatabase.insertUser(user)
        
        
        const response = {
            message: "Usuário cadastrado com sucesso"
        }

        return response
    }

    public getUsers = async () => {
        
        const users = await this.userDatabase.selectUsers()
                
        const response = {
            users: users
        }

        return response
    }
}
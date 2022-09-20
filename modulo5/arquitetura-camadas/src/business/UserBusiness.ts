import { response, Response } from "express"
import { UserDatabase } from "../database/UserDatabase"
import { IDeleteInputDTO, IEditUserInputDTO, IGetUsersInputDTO, ILoginInputDTO, ISignupInputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    public signup = async (input: ISignupInputDTO) => {
        const { name, email, password } = input

        if (!name || typeof name !== "string" || name.length < 3) {
            throw new Error("Parâmetro 'name' inválido")
        }

        if (!email || typeof email !== "string" || !email.includes('@')) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!password || typeof password !== "string" || password.length < 6) {
            throw new Error("Parâmetro 'senha' inválido")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword,
        )
        const userDatabase = new UserDatabase()
        await userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        const response = {
            message: "Usuário cadastrado!",
            token
        }

        return response

    }

    public login = async (input: ILoginInputDTO) => {
        const { email, password } = input

        if (!email || typeof email !== "string" || !email.includes('@')) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!password || typeof password !== "string" || password.length < 6) {
            throw new Error("Parâmetro 'senha' inválido")
        }


        const userData = new UserDatabase()
        const userDB = await userData.selectUserByEmail(email)

        if (!userDB) {
            throw new Error("Usuário não encontrado")
        }

        const hashManager = new HashManager()
        const isPasswordCorrect = await hashManager.compare(password, userDB.password)

        if (!isPasswordCorrect) {
            throw new Error("Erro nas credenciais")
        }

        const payload: ITokenPayload = {
            id: userDB.id,
            role: userDB.role
        }

        const token = new Authenticator().generateToken(payload)

        const response = {
            token
        }

        return response
    }

    public getUsers = async (input: IGetUsersInputDTO) => {
        const { token, search, page } = input

        const pageNumber = Number(page)

        if (!token) {
            throw new Error("Erro de autorização")
        }

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        const userData = new UserDatabase()
        const userDB = await userData.selectUserByName(search, pageNumber)

        if (!userDB) {
            throw new Error("Usuário não encontrado")
        }

        const response = {
            usuários: userDB
        }

        return response

    }

    public deleteUserAccount = async (input: IDeleteInputDTO) => {
        const { id, token } = input

        if (!token) {
            throw new Error("Erro de autorização")
        }

        if (!id) {
            throw new Error("Informe o id do usuário")
        }

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        const userData = new UserDatabase()
        const userDB = await userData.selectUserById(id)

        if (!userDB) {
            throw new Error("O perfil que você deseja deletar não foi encontrado")
        }

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new Error("Erro de autorização")
        }

        if (payload.id === id) {
            throw new Error("Usuário não pode ser deletado")
        }

        await userData.deleteUser(id)

        const response = {
            message: "Usuário deletado"
        }

        return response
    }

    public editUser = async (input:IEditUserInputDTO ) =>{
        const {id,token,name,email,password} = input

        if (!name || typeof name !== "string" || name.length < 3) {
            throw new Error("Parâmetro 'name' inválido")
        }

        if (!email || typeof email !== "string" || !email.includes('@')) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!password || typeof password !== "string" || password.length < 6) {
            throw new Error("Parâmetro 'senha' inválido")
        }

        if (!token) {
            throw new Error("Erro de autorização")
        }

        if (!id) {
            throw new Error("Informe o id do usuário")
        }

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        const userData = new UserDatabase()
        const userDB = await userData.selectUserById(id)

        if (!userDB) {
            throw new Error("O perfil que você deseja editar não foi encontrado")
        }

        if (payload.role !== USER_ROLES.ADMIN && payload.id !== id) {
            throw new Error("Erro de autorização")
        }
        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        await userData.updateUser(id, name, email,hashPassword)

        const response = {
            message: "Usuário editado"
        }

        return response

    }
}
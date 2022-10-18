import { UserDatabase } from "../database/UserDatabase"
import { ILoginInputDTO, ISignupInputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

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

        const userDB = await this.userDatabase.selectUserByEmail(email)

        if (userDB) {
            throw new Error("Email já cadastrado")
        }

        const id = this.idGenerator.generate()

        const hashPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashPassword,
            USER_ROLES.NORMAL
        )
        
        await this.userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "Usuário cadastrado!",
            token
        }

        return response
    }

    public login = async (input: ILoginInputDTO) => {
        const email = input.email
        const password = input.password

        if (!email || typeof email !== "string" || !email.includes('@')) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!password || typeof password !== "string" || password.length < 6) {
            throw new Error("Parâmetro 'senha' inválido")
        }

        const userDB = await this.userDatabase.selectUserByEmail(email)

        if (!userDB) {
            throw new Error("E-mail não cadastrado")
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const isPasswordCorrect = await this.hashManager.compare(password, user.getPassword())

        if (!isPasswordCorrect) {
            throw new Error("Senha incorreta")
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "Login realizado com sucesso",
            token
        }

        return response
    }

}
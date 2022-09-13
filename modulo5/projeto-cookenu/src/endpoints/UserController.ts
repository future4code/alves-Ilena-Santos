import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { EmailExist } from "../error/EmailExist";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { MissingFields } from "../error/MissingFields";
import User from "../model/User";
import Authenticator, { ITokenPayload } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { USER_ROLES } from "../types";

class UserController {

    public async createUser(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body

            const role = USER_ROLES.NORMAL

            if (!name || !email || !password) {
                throw new MissingFields()
            }

            if(password.length < 6 ) {
                throw new Error("Senha inválida");
            }

            const userDataBase = new UserDatabase()

            const userDB = await userDataBase.getUserByEmail(email)

            if (userDB) {
                throw new EmailExist()
            }

            const id = new GenerateId().createId();

            const hashManager = new HashManager()
            const hash = await hashManager.hash(password)

            const user = new User(id, name, email, hash, role)

            await userDataBase.createUser(user)

            const payload: ITokenPayload = {
                id,
                role
            }

            const token = new Authenticator().generateToken(payload)

            res.status(201).send({ message: "Usuário cadastrado com sucesso!", token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    async login(req: Request, res: Response) {
        try {

            const { email, password } = req.body

            if (!email || !password) {
                throw new MissingFields()
            }

            const userData = new UserDatabase()

            const userDB = await userData.getUserByEmail(email)

            if (!userDB) {
                throw new InvalidCredencial();
            }

            const hashManager = new HashManager()
            const isPasswordCorrect = await hashManager.compare(password, userDB.password)

            if (!isPasswordCorrect) {
                throw new InvalidCredencial();
            }

            const payload: ITokenPayload = {
                id: userDB.id,
                role: userDB.role
            }

            const token = new Authenticator().generateToken(payload)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    async getUserProfile(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string

            if (!token) {
                throw new InvalidCredencial();
            }

            const authenticator = new Authenticator()
            const payload = authenticator.verifyToken(token)

            if (payload.role !== USER_ROLES.NORMAL) {
                throw new Error("Autorização insuficiente")
            }

            const userData = new UserDatabase()
            const userDB = await userData.getUserById(payload.id)

            res.status(200).send({ id: userDB.id, name: userDB.email, email: userDB.email })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async getOthersProfile(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id as string

            if (!id) {
                throw new MissingFields()
            }

            if (!token) {
                throw new InvalidCredencial();
            }

            const authenticator = new Authenticator()
            const payload = authenticator.verifyToken(token)

            if (payload.role !== USER_ROLES.NORMAL) {
                throw new Error("Autorização insuficiente")
            }

            const userData = new UserDatabase()
            const userDB = await userData.getUserById(id)

            res.status(200).send({ id: userDB.id, name: userDB.email, email: userDB.email })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

}

export default UserController




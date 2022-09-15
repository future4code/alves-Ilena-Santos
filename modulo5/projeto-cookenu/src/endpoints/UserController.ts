import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDataBase";
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

    async createUser(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body
            let role = req.body.role

            if (!role) {
                role = USER_ROLES.NORMAL
            }

            if (role !== USER_ROLES.ADMIN && role !== USER_ROLES.NORMAL) {
                res.statusCode = 400
                throw new Error("Tipo de usuário inválido")
            }

            if (!name || !email || !password) {
                throw new MissingFields()
            }

            if (password.length < 6) {
                res.statusCode = 400
                throw new Error("Senha inválida")
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

            const userData = new UserDatabase()
            const userDB = await userData.getUserById(id)

            res.status(200).send({ id: userDB.id, name: userDB.email, email: userDB.email })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async followProfile(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const userToFollowId = req.body.userToFollowId as string
            const id = new GenerateId().createId();

            if (!userToFollowId) {
                throw new MissingFields()
            }

            if (!token) {
                throw new InvalidCredencial();
            }

            const authenticator = new Authenticator()
            const payload = authenticator.verifyToken(token)

            const userData = new UserDatabase()
            const userDB = await userData.getUserById(userToFollowId)

            if (!userDB) {
                throw new Error("O perfil que você deseja seguir não foi encontrado")
            }

            await userData.insertFollowing(id, payload.id, userToFollowId)

            res.status(200).send({ message: "seguido com sucesso" })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async unfollowProfile(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const userToUnFollowId = req.body.userToFollowId as string

            if (!userToUnFollowId) {
                throw new MissingFields()
            }

            if (!token) {
                throw new InvalidCredencial();
            }

            const authenticator = new Authenticator()
            const payload = authenticator.verifyToken(token)

            const userData = new UserDatabase()
            const userDB = await userData.getUserById(userToUnFollowId)

            if (!userDB) {
                res.statusCode = 404
                throw new Error("O perfil que você deseja parar de seguir não foi encontrado")
            }

            const following = await userData.selectFollowing(payload.id)

            const checkFollow = following.find(follow => follow.follow === userToUnFollowId)

            if (!checkFollow) {
                res.statusCode = 404
                throw new Error("Você não segue o perfil selecionado")
            }

            await userData.removeFollow(payload.id, userToUnFollowId)

            res.status(200).send({ message: "Perfil removido dos seus seguidores" })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async getRecipes(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string

            if (!token) {
                throw new InvalidCredencial();
            }

            const authenticator = new Authenticator()
            const payload = authenticator.verifyToken(token)

            const userData = new UserDatabase()
            const following = await userData.selectFollowing(payload.id)

            let usersRecipes: any = []

            for (const user of following) {
                try {
                    const recipeDataBase = new RecipeDatabase()
                    const recipes = await recipeDataBase.selectFollowingRecipes(user.follow)

                    if (recipes.length > 0) {
                        usersRecipes = [...usersRecipes, ...recipes]
                    }

                } catch (error) {
                    console.log(error)
                }
            }

            const editedUsersRecipes = usersRecipes.map((recipe: any) => {
                const newObject = {
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    createdAt: new Date(recipe.date).toLocaleDateString(),
                    userId: recipe.creator,
                    userName: recipe.name
                }
                return newObject
            })

            res.status(200).send({ recipes: editedUsersRecipes })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    public async deleteAccount(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const id = req.body.id

            if (!token) {
                throw new InvalidCredencial();
            }

            const authenticator = new Authenticator()
            const payload = authenticator.verifyToken(token)

            const userData = new UserDatabase()
            const userDB = await userData.getUserById(id)

            if (!userDB) {
                res.statusCode = 404
                throw new Error("O perfil que você deseja deletar não foi encontrado")
            }

            if (payload.role !== USER_ROLES.ADMIN) {
                res.statusCode = 401
                throw new Error("Você não tem autorização para deletar o usuário")
            }

            await userData.removeAccount(id)

            res.status(200).send({ message: "Conta deletada pelo ADM" })

        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }
}

export default UserController




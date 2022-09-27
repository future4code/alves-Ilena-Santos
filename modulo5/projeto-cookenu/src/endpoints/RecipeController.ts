import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDataBase";
import { InvalidCredencial } from "../error/InvalidCredencial";
import { MissingFields } from "../error/MissingFields";
import Recipe from "../model/Recipe";
import Authenticator, { ITokenPayload } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { USER_ROLES } from "../types";

class RecipeController {
    public async createRecipe(req: Request, res: Response) {
        try {
            const { title, description } = req.body
            const token = req.headers.authorization as string

            if (!title || !description) {
                throw new MissingFields()
            }

            if (!token) {
                throw new InvalidCredencial();
            }

            const authenticator = new Authenticator()
            const payload = authenticator.verifyToken(token)

            const id = new GenerateId().createId();

            const date = new Date().toLocaleDateString()

            const recipe = new Recipe(id, title, description, date.split("/").reverse().join("/"), payload.id)

            const recipeDataBase = new RecipeDatabase()
            await recipeDataBase.createRecipe(recipe)

            res.status(201).send({ message: "Receita criada com sucesso!" })

        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    public async getRecipeById(req: Request, res: Response) {
        try {

            const token = req.headers.authorization as string
            const id = req.params.id

            if (!id) {
                throw new MissingFields()
            }

            if (!token) {
                throw new InvalidCredencial();
            }

            const authenticator = new Authenticator()
            const payload = authenticator.verifyToken(token)

            const recipeDataBase = new RecipeDatabase()
            const recipe = await recipeDataBase.selectRecipeById(id)

            if (!recipe) {
                res.statusCode = 404
                throw new Error("Receita não encontrada!")
            }

            const newDate = new Date(recipe.date).toLocaleDateString()

            res.status(200).send({
                receita: {
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    cratedAt: newDate,
                    creator: recipe.creator
                }
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    public async editRecipe(req: Request, res: Response) {
        try {
            const { title, description } = req.body
            const token = req.headers.authorization as string
            const id = req.params.id

            if (!title || !description) {
                throw new MissingFields()
            }

            if (!token) {
                throw new InvalidCredencial();
            }

            const authenticator = new Authenticator()
            const payload = authenticator.verifyToken(token)


            const recipeDataBase = new RecipeDatabase()
            const recipe = await recipeDataBase.selectRecipeById(id)
            if (!recipe) {
                res.statusCode = 404
                throw new Error("Receita não encontrada!")
            }

            if (recipe.creator !== payload.id) {
                res.statusCode = 401
                throw new Error("A receita pertence a outro usuário")
            }

            await recipeDataBase.editRecipe(id, title, description)

            res.status(200).send({ message: "Receita modificada com sucesso!" })

        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    public async deleteRecipe(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const id = req.params.id

            if (!token) {
                throw new InvalidCredencial();
            }

            const authenticator = new Authenticator()
            const payload = authenticator.verifyToken(token)

            const recipeDataBase = new RecipeDatabase()
            const recipe = await recipeDataBase.selectRecipeById(id)

            if (!recipe) {
                res.statusCode = 404
                throw new Error("Receita não encontrada!")
            }

            if (payload.role === USER_ROLES.ADMIN) {
                await recipeDataBase.deleteRecipe(id)
                res.status(201).send({ message: "Receita deletada pelo ADM" })
            } else {

                if (recipe.creator !== payload.id) {
                    res.statusCode = 401
                    throw new Error("A receita pertence a outro usuário")
                }
    
                await recipeDataBase.deleteRecipe(id)
    
                res.status(200).send({ message: "Receita deletada com sucesso!" })

            }
        } catch (error: any) {
            res.status(error.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

}

export default RecipeController
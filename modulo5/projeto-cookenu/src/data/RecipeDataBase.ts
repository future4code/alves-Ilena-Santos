import Recipe from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

    public async createRecipe(recipe: Recipe) {

        await this.getConnection().insert({
            id: recipe.getId(), 
            description: recipe.getDescription(),
            title: recipe.getTitle(),
            date: recipe.getDate()
        }).into("cookenu_recipes")
    }

    public async selectRecipeById(id: string) {
        const result = await this.getConnection()
            .select("*")
            .from("cookenu_recipes")
            .where({ id })

        return result[0]
    }


}

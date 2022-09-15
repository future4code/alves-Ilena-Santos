import Recipe from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

    public async createRecipe(recipe: Recipe) {

        await this.getConnection().insert({
            id: recipe.getId(), 
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            date: recipe.getDate(),
            creator: recipe.getCreator()
        }).into("cookenu_recipes")
    }

    public async selectRecipeById(id: string) {
        const result = await this.getConnection()
            .select("*")
            .from("cookenu_recipes")
            .where({ id })

        return result[0]
    }

    public async selectFollowingRecipes(followingId:string){
        const result = await this.getConnection()
        .select("cookenu_recipes.id","title", "description", "date", "creator", "cookenu_users.name")
        .from("cookenu_recipes")
        .where({ creator: followingId })
        .join("cookenu_users", "cookenu_recipes.creator", "cookenu_users.id")
        
    return result
    }

    public async editRecipe(recipeId:string, newTitle: string, newDescription: string) {
         await this.getConnection()
            .from("cookenu_recipes")
            .update({
                title: newTitle,
                description: newDescription
            })
            .where({ id: recipeId })
    }

    public async deleteRecipe(recipeId:string) {
        await this.getConnection()
           .from("cookenu_recipes")
           .delete()
           .where({ id: recipeId })
   }


}

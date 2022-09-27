import app from "./app"
import RecipeController from "./endpoints/RecipeController"
import UserController from "./endpoints/UserController"

const user = new UserController()

app.post('/signup', user.createUser)
app.post("/login",user.login)
app.get("/user/profile", user.getUserProfile)
app.get("/user/feed", user.getRecipes)
app.get("/user/:id", user.getOthersProfile)
app.post("/user/follow", user.followProfile)
app.post("/user/unfollow", user.unfollowProfile)
app.delete("/user/deleteAccount", user.deleteAccount)

const recipe = new RecipeController()

app.post("/recipe", recipe.createRecipe)
app.get("/recipe/:id", recipe.getRecipeById)
app.put("/editRecipe/:id", recipe.editRecipe)
app.delete("/deleteRecipe/:id", recipe.deleteRecipe)






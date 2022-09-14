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

const recipe = new RecipeController()

app.post("/recipe", recipe.createRecipe)
app.get("/recipe/:id", recipe.getRecipeById)






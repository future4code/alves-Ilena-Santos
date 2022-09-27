import app from "./app"
import UserEndpoint from "./endpoints/User"

const user = new UserEndpoint()


app.post('/user/signup', user.createUser)
app.post("/user/login",user.login)
app.put('/user/edit', user.editUser)
app.get('/user/all', user.getUsers)
app.get("/user/profile", user.getUserProfile)






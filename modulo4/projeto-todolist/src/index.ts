import app from './app'
import createUser from "./endpoints/createUser"
import getUserById from "./endpoints/getUserById"
import updadeUserEndpoint from './endpoints/updateUserEndpoint';
import createTaskEndpoint from "./endpoints/createTaskEndpoint"
import getTaskById from './endpoints/getTaskById';


app.post("/user", createUser)

app.get("/user/:id", getUserById)

app.put("/user/edit/:id", updadeUserEndpoint)

app.post("/task", createTaskEndpoint)

app.get("/task/:id", getTaskById)
import app from "./app"
import postProduct from './endpoints/postProduct'
import getProducts from "./endpoints/getProducts"
import postUser from "./endpoints/postUser"
import getUsers from "./endpoints/getUsers"
import postPurchases from "./endpoints/postPurchases"
import getUsersPurchases from "./endpoints/getUsersPurchases"

app.post("/users", postUser)

app.get("/users", getUsers )

app.post("/products", postProduct)

app.get("/products", getProducts )

app.post("/purchases", postPurchases)

app.get("/users/:user_id/purchases", getUsersPurchases)

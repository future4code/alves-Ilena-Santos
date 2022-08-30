import { app } from "./app";
import { getAllUsers, getAllUsersByLimit, getAllUsersByName, getAllUsersByOrder, getAllUsersByType } from "../src/endpoints/getAllUsers"

// Exercicio 1
// a)
//  app.get("/users", getAllUsersByName)

// b)
app.get("/users/:type", getAllUsersByType)

// Exercicio 2
// app.get("/users", getAllUsersByOrder)

// Exercicio 3
// app.get("/users", getAllUsersByLimit)

// Exercicio 4
app.get("/users", getAllUsers)
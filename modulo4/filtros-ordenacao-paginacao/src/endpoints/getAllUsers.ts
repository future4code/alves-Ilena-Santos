import { Request, Response } from "express"
import { selectAllUsers, selectAllUsersByLimit, selectAllUsersByName, selectAllUsersByOrder, selectAllUsersByType } from "../data/selectAllUsers"

// Exeercicio 1
// a)

export const getAllUsersByName = async (req: Request, res: Response): Promise<void> => {
   try {
      const name = req.query.name as string || ""
      const users = await selectAllUsersByName(name)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)

   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
}

// b)

export const getAllUsersByType = async (req: Request, res: Response): Promise<void> => {
   try {
      const type = req.params.type as string
      const users = await selectAllUsersByType(type)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)

   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
}

// Exercicio 2
export const getAllUsersByOrder = async (req: Request, res: Response): Promise<void> => {
   try {
      let orderBy = req.query.orderBy as string
      let order = req.query.order as string

      if (!orderBy) {
         orderBy = "email"
      }
      if (!order) {
         order = "ASC"
      }
      const users = await selectAllUsersByOrder(orderBy, order)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)

   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
}
// Exercicio 3

export const getAllUsersByLimit = async (req: Request, res: Response): Promise<void> => {
   try {
      let page = Number(req.query.page)
      if (page < 1) {
         page = 1
      }
      const users = await selectAllUsersByLimit(page)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)

   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
}

// Exercicio 4
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   try {
      let orderBy = req.query.orderBy as string
      let filterBy = req.query.filterBy as string
      let order = req.query.order as string
      const filter = req.query.filter as string || ""
      let page = Number(req.query.page)

      if (!filterBy) {
         filterBy = "name"
      }

      if (page < 1 || !page) {
         page = 1
      }

      if (!orderBy) {
         orderBy = "name"
      }
      if (!order) {
         order = "DESC"
      }

      const users = await selectAllUsers(page, filterBy, filter, orderBy, order)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)

   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
}
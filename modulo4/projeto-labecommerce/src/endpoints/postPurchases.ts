import { Request, Response } from "express";
import insertPurchases from "../data/insertPurchases";
import selectProductsById from "../data/selectProductById";


export default async function postPurchases(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { user_id, product_id, quantity } = req.body

      const id: string = Date.now().toString()

      if (!user_id || !product_id || !quantity) {
         res.statusCode = 400
         throw new Error("'user_id', 'product_id' e 'quantidade' são obrigatórios")
      }

      const product = await selectProductsById(product_id)

      const total_price = product.price * quantity

      await insertPurchases(id, user_id, product_id, quantity, total_price)


      res.send("Compra registrada!")

   } catch (error: any) {

      res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
   }
}
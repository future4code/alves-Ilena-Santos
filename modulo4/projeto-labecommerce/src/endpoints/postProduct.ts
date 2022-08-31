import { Request, Response } from "express";
import insertProduct from "../data/insertProduct";


export default async function postProduct(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { name, image_url } = req.body
      const price = req.body.price
      const id: string = Date.now().toString()

      if (!name || !price  || !image_url) {
         res.statusCode = 400
         throw new Error("'nome', 'preço' e 'url' são obrigatórios")
      }

      if(typeof price !== "number"){
         throw new Error("preço inválido")
      }
   
      await insertProduct(id, name, price, image_url)


      res.send("produto inserido!")

   } catch (error: any) {

         console.log(error.message || error.sqlMessage );
         res.status(res.statusCode || 500).send(error.message || error.sqlMessage )
}
}
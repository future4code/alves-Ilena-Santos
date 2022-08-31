import { Request, Response } from "express";
import insertUser from "../data/insertUser";


export default async function postUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const { name, email,  password } = req.body
      const id: string = Date.now().toString()

      if (!name || !email  || !password) {
         res.statusCode = 400
         throw new Error("'nome', 'email' e 'senha' são obrigatórios")
      }
      
      await insertUser(id, name, email, password)

      res.send("Usuário cadastrado!")

   } catch (error: any) {

         console.log(error.message || error.sqlMessage );
         res.status(res.statusCode || 500).send(error.message || error.sqlMessage )
}
}
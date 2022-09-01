import { Request, Response } from "express";
import selectPurchasesById from "../data/selectPurchasesById";
import selectUsers from "../data/selectUsers";

export default async function getUsers(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const result = await selectUsers()

        for (const user of result) {
            try {

                const purchases = await selectPurchasesById(user.id)

                user.purchases = purchases

                if (purchases.length === 0) {
                    user.purchases = []
                }
            } catch (error) {
                user.purchases = []
            }
        }

        res.send(result)


        // const teste = result.map((user)=>{
        //     // const teste2 = await selectPurchasesById(user.id)
        //     return user.id
        // })

        // const teste2 = teste.forEach(selectPurchasesById(item:String) )

        // res.send(result)



    } catch (error: any) {

        res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
    }
}
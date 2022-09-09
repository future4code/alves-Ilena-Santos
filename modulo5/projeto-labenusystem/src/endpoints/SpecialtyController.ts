import { Request, Response } from "express";
import SpecialtyData from "../data/SpecialtyData";


class SpecialtyController {
    async addSpecialty(req: Request, res: Response) {
        try {
            const specialtyName = req.body.specialtyName
            const specialtyData = new SpecialtyData()
            await specialtyData.insertSpecialty(specialtyName)

            res.status(200).send({ message: "Especialidade Cadastrada!" })
        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
        }

    }
}

export default SpecialtyController
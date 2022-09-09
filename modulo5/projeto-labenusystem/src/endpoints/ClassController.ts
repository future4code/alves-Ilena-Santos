import { Request, Response } from "express";
import Class from "../model/Class";
import ClassData from "../data/ClassData";

class ClassController {

    async createClass(req: Request, res: Response) {
        try {

            const { className, module } = req.body
            const classId = Date.now().toString()


            if ( !className || !module) {
                res.statusCode = 400
                throw new Error("O nome da turma e o módulo devem ser passados!")
            }

            const newClass = new Class(classId, className, [], [], module)
            
            const classData = new ClassData()

            const anwser = await classData.insertClass(newClass)

            res.status(201).send({ message: "Classe inserida!" })
        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    async getClasses(req: Request, res: Response) {
        try {

            const classData = new ClassData()

            const allClasses = await classData.selectClasses()

            if(!allClasses.length){
                throw new Error("Não há nenhuma turma!")
            }

            res.status(200).send(allClasses)

        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    async getClassesById(req: Request, res: Response, classId: string) {
        try {


            const classData = new ClassData()

            const allClasses = await classData.selectClassesById(classId)

            if(!allClasses.length){
                res.statusCode = 404
                throw new Error("Não há nenhuma turma com esse id!")
            }

            res.status(200).send(allClasses)

        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    async changeClassModule (req: Request, res: Response) {
        try {

            const { classId, module } = req.body

            if ( !classId || !module) {
                res.statusCode = 400
                throw new Error("O id da turma e o módulo devem ser informados!")
            }

            const classData = new ClassData()

             await classData.updateClassModule(module, classId)

            

            res.status(200).send({ message: "Módulo atualizado!" })

        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    
}

export default ClassController
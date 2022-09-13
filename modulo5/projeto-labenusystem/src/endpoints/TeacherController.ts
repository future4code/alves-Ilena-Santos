import { Request, Response } from "express";
import TeacherData from "../data/TeacherData";
import Teacher from "../model/Teacher";
import ClassData from "../data/ClassData";
import SpecialtyData from "../data/SpecialtyData";

class TeacherController {
    async createTeacher(req: Request, res: Response) {
        try {
            const { name, email, birth_date, classId, specialtyId } = req.body
            const teacherId = Date.now().toString()

            if (!name || !email || !birth_date || !classId || !specialtyId) {
                res.statusCode = 400
                throw new Error("Informe todo os dados!")
            }
            const classData = new ClassData()
            const getClass = await classData.selectClassesById(classId)

            if (!getClass.length) {
                res.statusCode = 404
                throw new Error("Turma não encontrada :( ")
            }

            const specialtyData = new SpecialtyData()
            const getSpecialty = await specialtyData.selectSpecialtyById(specialtyId)

            if (!getSpecialty.length) {
                res.statusCode = 404
                throw new Error("Especialidade não encontrada :( ")
            }

            const newTeacher = new Teacher(teacherId, name, email, birth_date.split("/").reverse().join("/"), classId)

            const teacherData = new TeacherData()

            await teacherData.insertTeacher(newTeacher)

            res.status(201).send({ message: "Professor cadastrado!" })
        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    async getAllTeachers(req: Request, res: Response) {
        try {

            const teacherData = new TeacherData()
            const teachers = await teacherData.selectTeachers()

            if(!teachers.length){
                res.statusCode = 404
                throw new Error("Não há professores cadastrados")
            }

            res.status(200).send(teachers)

        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

   async changeTeacherClass (req: Request, res: Response) {
    try {
        const {teacherId, classId} = req.body
        if ( !teacherId || !classId) {
            throw new Error("O id da turma e do professor devem ser informados!")
        }

        const classData = new ClassData()
            const getClassById = await classData.selectClassesById(classId)

            if(!getClassById.length) {
                res.statusCode = 404
                throw new Error("Turma não encontrada :( ")
            }
            const teacherData = new TeacherData()
            const getTeacherById= await teacherData.selectTeacherById(teacherId)

            if(!getTeacherById.length) {
                res.statusCode = 404
                throw new Error("Professor não encontrado :( ")
            }

            await teacherData.updateTeacherClass(teacherId, classId)
            
            res.status(200).send({ message: "Turma do professor atualizada!" })
    } catch (error:any) {
        res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
    }
   }
}

export default TeacherController
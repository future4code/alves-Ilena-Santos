import { Request, Response } from "express";
import Student from "../model/Student";
import StudentData from "../data/StudentData";
import ClassData from "../data/ClassData";
import HobbyData from "../data/HobbyData";

class StudentController {

    async createStudent(req: Request, res: Response) {
        try {

            const { name, email, birth_date, classId, hobby } = req.body
            const studentId = Date.now().toString()


            if (!name || !email || !birth_date || !hobby || !classId) {
                res.statusCode = 400
                throw new Error("Informe todo os dados!")
            }

            const classData = new ClassData()
            const getClass = await classData.selectClassesById(classId)

            if (!getClass.length) {
                res.statusCode = 404
                throw new Error("Turma não encontrada :( ")
            }

            // Verify if hobby alrealdy exists
            const hobbyData = new HobbyData()
            let getHobby = await hobbyData.selectHobbyByName(hobby)

            
            if (!getHobby.length) {
                // create the hobby 
                await hobbyData.insertHobby(hobby)
                getHobby = await hobbyData.selectHobbyByName(hobby)
            }
            
            // create a new student
            const newStudent = new Student(studentId, name, email, birth_date.split("/").reverse().join("/"), classId)
            const studentData = new StudentData()
            await studentData.insertStudent(newStudent)
        
            // get the new student's id
            const getStudentById = await studentData.selectStudentById(studentId)

            // Associates the studante to their hobby in labenusystem_student_hobby's table 
            await hobbyData.insertStudentHobby(getStudentById[0].id, getHobby[0].id)

            res.status(200).send({ message: "Estudante cadastrado!" })
        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    async getStudentByName(req: Request, res: Response) {
        try {

            const name = req.query.name as string || ""

            if (!name) {
                res.statusCode = 400
                throw new Error("Informe o nome que deseja procurar!")
            }

            const studentData = new StudentData()

            const student = await studentData.selectStudent(name)

            if (!student.length) {
                res.statusCode = 404
                throw new Error("Não há estudantes com esse nome")
            }

            res.status(200).send(student)

        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }

    async changeStudentClass(req: Request, res: Response) {
        try {

            const { studentId, classId } = req.body

            if (!classId || !studentId) {
                res.statusCode = 400
                throw new Error("O id da turma e do estudante devem ser informados!")
            }

            const classData = new ClassData()
            const getClassById = await classData.selectClassesById(classId)

            if (!getClassById.length) {
                res.statusCode = 404
                throw new Error("Turma não encontrada :( ")
            }

            const studentData = new StudentData()
            const getStudentById = await studentData.selectStudentById(studentId)

            if (!getStudentById.length) {
                res.statusCode = 404
                throw new Error("Estudante não encontrado :( ")
            }

            await studentData.updateStudentClass(studentId, classId)

            res.status(200).send({ message: "Turma do estudante atualizada!" })

        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.message || error.sqlMessage)
        }
    }


}

export default StudentController
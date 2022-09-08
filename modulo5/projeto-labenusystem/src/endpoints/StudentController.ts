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
         

            if ( !name || !email || !birth_date || !hobby) {
                throw new Error("Informe todo os dados!")
            }
            
            const classData = new ClassData()
            const getClass = await classData.selectClassesById(classId)

            if(!getClass.length) {
                throw new Error("Turma não encontrada :( ")
            }

            const hobbyData = new HobbyData()
            const getHobby = await hobbyData.selectHobbyByName(hobby)

            if(!getHobby.length) {
                await hobbyData.insertHobby(hobby)
            }

            const newStudent = new Student(studentId,name,email, birth_date.split("/").reverse().join("/"), classId)
            
            const studentData = new StudentData()

            const anwser = await studentData.insertClass(newStudent)

            res.status(201).send({ message: "Estudante cadastrado!" })
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    
}

export default StudentController
import Student from '../model/Student'
import BaseDataBase from './BaseDataBase'


class StudentData extends BaseDataBase {
    async insertStudent(newStudent: Student): Promise<void> {

        await this.getConnetion()
            .insert({
                id: newStudent.getStudentId(),
                name: newStudent.getStudentName(),
                email: newStudent.getStudentEmail(),
                birth_date: newStudent.getStudentBithdate(),
                class_id: newStudent.getStudentClassId(),
            })
            .into("labenusystem_student")
    }

    async selectStudent(search: string) {
        const result = await this.getConnetion().select("*")
            .from("labenusystem_student")
            .where("name", "LIKE", `%${search}%`)

        return result
    }

    async selectStudentById(studentId: string) {
        const result = await this.getConnetion().select("*")
            .from("labenusystem_student")
            .where({
                id: studentId
            })

        return result
    }

    async updateStudentClass(studentId: string, classId:string){
        
        await this.getConnetion().update("class_id", classId)
        .where({
            id: studentId
        })
        .from("labenusystem_student")

    }
}

export default StudentData
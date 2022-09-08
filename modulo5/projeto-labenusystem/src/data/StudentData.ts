import Student from '../model/Student'
import BaseDataBase from './BaseDataBase'


class StudentData extends BaseDataBase{
    async insertClass(newStudent: Student): Promise<void> {
       
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
}

export default StudentData
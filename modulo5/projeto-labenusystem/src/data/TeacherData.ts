import Teacher from "../model/Teacher";
import BaseDataBase from "./BaseDataBase";

class TeacherData extends BaseDataBase{

    async insertTeacher(newTeacher: Teacher): Promise<void> {
       
        await this.getConnetion()
            .insert({
                id: newTeacher.getTeacherId(),
                name: newTeacher.getTeacherName(),
                email: newTeacher.getTeacherEmail(),
                birth_date: newTeacher.getTeacherBithdate(),
                class_id: newTeacher.getTeacherClassId(),
            })
            .into("labenusystem_teacher")
    }

    async selectTeachers() {
        const result = await this.getConnetion().select("*")
            .from("labenusystem_teacher")

        return result
    }

    async selectTeacherById(teacherId: string) {
        const result = await this.getConnetion().select("*")
            .from("labenusystem_teacher")
            .where({
                id: teacherId
            })

        return result
    }

    async updateTeacherClass(teacherId: string, classId:string){
        
        await this.getConnetion().update("class_id", classId)
        .where({
            id: teacherId
        })
        .from("labenusystem_teacher")

    }
}

export default TeacherData
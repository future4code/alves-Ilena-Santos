import BaseDataBase from "./BaseDataBase";

class HobbyData extends BaseDataBase{

    async insertHobby(hobbyName:string): Promise<void> {
        const id = Date.now().toString()
        await this.getConnetion()
            .insert({
                id: id,
                name: hobbyName
               
            })
            .into("labenusystem_hobby")
    }

    async selectHobbyByName(hobbyName:string) {
        
        const result = await this.getConnetion()
            .select("*").where({
                name: hobbyName
            })
            .into("labenusystem_hobby")

        return result
    }

    async insertStudentHobby(studentId:string, hobbyId:string ): Promise<void> {
        const id = Date.now().toString()
        await this.getConnetion()
            .insert({
                id: id,
                student_id: studentId,
                hobby_id: hobbyId
               
            })
            .into("labenusystem_student_hobby")
    }

}

export default HobbyData
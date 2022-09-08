import Class from "../model/Class"
import BaseDataBase from "./BaseDataBase"

class ClassData extends BaseDataBase{

    async insertClass(newClass: Class): Promise<void> {
       
        await this.getConnetion()
            .insert({
                id: newClass.getClassId(),
                name: newClass.getClassName(),
                module: newClass.getClassModule(),
            })
            .into("labenusystem_class")
    }

    async selectClasses(){
        const result = await this.getConnetion().select("*").from("labenusystem_class")

        return result
    }

    async selectClassesById(classId:string){
        const result = await this.getConnetion().select("*").from("labenusystem_class").where(
            ({
                id: classId
            })
        )

        return result
    }

    async updateClassModule(newModule: string, classId:string){
        
        await this.getConnetion().update("module", newModule).where(({
            id: classId
        })).from("labenusystem_class")

    }


}

export default ClassData
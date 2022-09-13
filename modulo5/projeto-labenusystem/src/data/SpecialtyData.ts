import BaseDataBase from "./BaseDataBase";

class SpecialtyData extends BaseDataBase{

    async insertSpecialty(specialtyName:string): Promise<void> {
        const id = Date.now().toString()
        await this.getConnetion()
            .insert({
                id: id,
                name: specialtyName
               
            })
            .into("labenusystem_specialty")
    }

    async selectSpecialtyById(specialtyId:string){
        const result = await this.getConnetion().select("*")
        .from("labenusystem_specialty")
        .where(
            ({
                id: specialtyId
            })
        )

        return result
    }
}

export default SpecialtyData
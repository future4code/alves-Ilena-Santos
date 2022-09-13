class Teacher{
    private teacherId: string
    private name: string
    private email: string
    private birthdate: string
    private classId: string

    constructor(
        teacherId: string, name: string, email: string,
        birthdate: string, classId: string, 
    ) {
        this.teacherId = teacherId
        this.name = name
        this.email = email
        this.birthdate = birthdate
        this.classId = classId
    }

    getTeacherId(){
        return this.teacherId
    }
    getTeacherName(){
        return this.name
    }
    getTeacherEmail(){
        return this.email
    }
    getTeacherBithdate(){
        return this.birthdate
    }
    getTeacherClassId(){
        return this.classId
    }
}

export default Teacher
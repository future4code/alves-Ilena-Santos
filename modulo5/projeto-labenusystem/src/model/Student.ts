class Student{
    private studentId: string
    private name: string
    private email: string
    private birthdate: string
    private classId: string

    constructor(
        studentId: string, name: string, email: string,
        birthdate: string, classId: string, 
    ) {
        this.studentId = studentId
        this.name = name
        this.email = email
        this.birthdate = birthdate
        this.classId = classId
    }

    getStudentId(){
        return this.studentId
    }
    getStudentName(){
        return this.name
    }
    getStudentEmail(){
        return this.email
    }
    getStudentBithdate(){
        return this.birthdate
    }
    getStudentClassId(){
        return this.classId
    }
}

export default Student
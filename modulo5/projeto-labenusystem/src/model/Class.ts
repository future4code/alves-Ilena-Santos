class Class {
    private classId: string
    private className: string
    private teachers: []
    private students: []
    private module: string

    constructor(
        classId: string, className:string,
        teachers:[], students:[], module: string
    ) {
        this.classId = classId
        this.className = className
        this.teachers = teachers
        this.students=students
        this.module=module
    }

    getClassId(){
        return this.classId
    }

    getClassName(){
        return this.className
    }
    getClassModule(){
        return this.module
    }


}

export default Class
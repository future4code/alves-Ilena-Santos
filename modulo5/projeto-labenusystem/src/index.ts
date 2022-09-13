import app from "./app";
import ClassController from "./endpoints/ClassController";
import SpecialtyController from "./endpoints/SpecialtyController";
import StudentController from "./endpoints/StudentController";
import TeacherController from "./endpoints/TeacherController";



const classController = new ClassController
app.post("/class", classController.createClass )

app.get("/class", classController.getClasses)

app.put("/class", classController.changeClassModule )

const studentController = new StudentController
app.post("/student", studentController.createStudent)

app.get("/student", studentController.getStudentByName)

app.put("/student", studentController.changeStudentClass)

const teacherController = new TeacherController

app.post("/teacher", teacherController.createTeacher)

app.get("/teacher", teacherController.getAllTeachers)

app.put("/teacher", teacherController.changeTeacherClass)

const specialtyController = new SpecialtyController

app.post("/specialty", specialtyController.addSpecialty)

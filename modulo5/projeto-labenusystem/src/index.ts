import app from "./app";
import ClassController from "./endpoints/ClassController";
import StudentController from "./endpoints/StudentController";


const classController = new ClassController
app.post("/class", classController.createClass )

app.get("/class", classController.getClasses)

app.put("/class", classController.changeClassModule )

const studentController = new StudentController
app.post("/student", studentController.createStudent)

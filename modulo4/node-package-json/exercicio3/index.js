const fs = require('fs')

// Exercício 3
const toDoList = JSON.parse(fs.readFileSync(__dirname + "/save.json"))

const newTask = process.argv[2]
toDoList.push(newTask)
const taskString = JSON.stringify(toDoList)
fs.writeFileSync(__dirname + "/save.json", taskString)


console.log("tarefas:",toDoList)



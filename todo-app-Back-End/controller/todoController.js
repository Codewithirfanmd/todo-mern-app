const Todo = require("../models/todo")

exports.addTodoItem = (req, res, next)=> {
    console.log(req.body)
    const {task, date} = req.body
    const todo = new Todo({task, date})
    todo.save().then(()=> {
        res.json(todo)
    })
}

exports.getAllTodo = (req, res, next)=> {
    console.log("return all Todos")
    Todo.find().then(allTodo=> {
        res.json(allTodo)
    })
}

exports.deleteTodoItem = (req, res, next)=> {
    const id = req.params.id
    Todo.findByIdAndDelete(id).then(()=> {
        res.json(id)
    })
}
const express = require("express")
const todoController = require("../controller/todoController")
const todoRouter = express.Router()

todoRouter.get("/api/todos", todoController.getAllTodo)
todoRouter.post("/api/todos", todoController.addTodoItem)
todoRouter.delete("/api/todos/:id", todoController.deleteTodoItem)


module.exports = todoRouter
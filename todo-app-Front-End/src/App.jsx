import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { addItemToServer, deleteTodoFromServer, initialTodo } from "../services/dataBaseServices";
import { useEffect } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(()=> {
    initialTodo().then(allTodo=> {
      allTodo = allTodo.map(todo=> {
        return { id: todo._id, name: todo.task, dueDate: todo.date }
      })
      setTodoItems(allTodo)
    })
  }, [])

  const handleNewItem = async (itemName, itemDueDate) => {
    const {_id, task, date} = await addItemToServer(itemName, itemDueDate)
    const newTodoItems = [
      ...todoItems,
      { id: _id, name: task, dueDate: date },
    ];
    setTodoItems(newTodoItems)
  }

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteTodoFromServer(id)
    const newTodoItems = todoItems.filter((item) => item.id !== deletedId);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;

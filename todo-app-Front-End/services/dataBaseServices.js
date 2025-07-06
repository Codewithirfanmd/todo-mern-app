export const addItemToServer = async (task, date)=> {
    const res = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({task, date})
    })

    const item = await res.json()
    return item
}

export const initialTodo = async ()=> {
    const res = await fetch("http://localhost:3000/api/todos")

    const allTodo = await res.json()
    return allTodo
}

export const deleteTodoFromServer = async (id)=> {
    const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "DELETE"
    })
    const deletedId = await res.json()
    return deletedId
}
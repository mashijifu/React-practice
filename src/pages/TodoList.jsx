import {useState} from 'react';
import shortid from "shortid"

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const [inputText, setInputText] = useState("")

    const addTodo = (todo) => {
        if(inputText === "") {
            alert("Todoを入力してください")
        } else {
            setTodos(
                [
                    ...todos,
                    {id: shortid.generate(), todo: todo, checked: false}
                ]
            )
            setInputText("")
        }
    }

    const ToggleCheckbox = (id) => {
        // const newTodos = todos
        // newTodos[i].checked = !newTodos[i].checked
        // setTodos(newTodos)

        setTodos(
            todos.map((task) => {
                if(id === task.id) {
                    return { ...task, todo: task.todo, checked: !task.checked}
                } else {
                    // return { todo: task.todo, checked: task.checked}
                    return task
                }
            })
        )
    }

    const deleteTodo = (id) => {
        setTodos(
            todos.filter((task) => task.id !== id)
        )
    }
 
    return (
        <>
            <h1>To Do List
            </h1>

            <input 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}    
            />

            <button onClick={() => addTodo(inputText)}>保存</button>

            <ul style={{ listStyle: 'none' }}>
                {todos.map((task, index) => {
                    return(
                        <li key={index} className="todo-list">
                            <input 
                                type="checkbox"
                                checked={task.checked}
                                onClick={() => ToggleCheckbox(task.id)}
                            />
                            <span>{task.todo}</span>
                            <button onClick={() => deleteTodo(task.id)}>×</button>
                        </li>

                    )

                })}
            </ul>

        </>
    )
}

export default TodoList
import React, {useState} from 'react';
import shortid from "shortid"
import AddTodoBar from "../components/AddTodoBar.jsx"
import ItemList from '../components/ItemList.jsx'

const TodoPage = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        if(todo === "") {
            alert("Todoを入力してください")
        } else {
            setTodos(
                [
                    ...todos,
                    {id: shortid.generate(), todo: todo, checked: false}
                ]
            )
        }
    }

    const toggleCheckbox = (id) => {
        setTodos(
            todos.map((task) => {
                if(id === task.id) {
                    return { ...task, checked: !task.checked}
                } else {
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
        <div className="box">
            <h1>Todo App</h1>

            <AddTodoBar addTodo={addTodo} />
            <ItemList
                todos={todos}
                toggleCheckbox={toggleCheckbox}
                deleteTodo={deleteTodo}
            />
            {/* <input 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}    
            />

            <button onClick={() => addTodo(inputText)}>追加</button> */}

            {/* <ul style={{ listStyle: 'none' }}>
                {todos.map((task, index) => {
                    return(
                        <li key={index} className={`${task.checked ? 'checked' : ''}`}>
                            <input 
                                type="checkbox"
                                checked={task.checked}
                                onClick={() => ToggleCheckbox(task.id)}
                            />
                            {task.todo}
                            <button onClick={() => deleteTodo(task.id)}>×</button>
                        </li>

                    )

                })}
            </ul> */}

        </div>
    )
}

export default TodoPage
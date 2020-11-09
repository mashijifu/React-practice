import {useState} from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState(
        [
            {todo: "洗濯", checked: false},
            {todo: "食器洗い", checked: false},
            {todo: "掃除機やる", checked: false},     
        ]
    )

    const [inputText, setInputText] = useState("")

    const addTodo = (todo) => {
        if(inputText === "") {
            alert("Todoを入力してください")
        } else {
            setTodos(
                [
                    ...todos,
                    {todo: todo, checked: false}
                ]
            )
            setInputText("")
        }
    }

    const ToggleCheckbox = (i) => {
        // const newTodos = todos
        // newTodos[i].checked = !newTodos[i].checked
        // setTodos(newTodos)

        setTodos(
            todos.map((task, index) => {
                if(i === index) {
                    return { todo: task.todo, checked: !task.checked}
                } else {
                    return { todo: task.todo, checked: task.checked}
                }
            })
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
                                onClick={() => ToggleCheckbox(index)}
                            />
                            {task.todo}
                        </li>

                    )

                })}
            </ul>

        </>
    )
}

export default TodoList
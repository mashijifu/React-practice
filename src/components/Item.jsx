import React from 'react'

const Item = ({key, task, toggleCheckbox, deleteTodo}) => {
    return (
        <li className={`${task.checked ? 'checked' : ''}`}>
            <input 
                key={key}
                type="checkbox"
                checked={task.checked}
                onClick={() => toggleCheckbox(task.id)}
            />
            {task.todo}
            <button onClick={() => deleteTodo(task.id)}>×</button>
        </li>
    )
}

export default Item

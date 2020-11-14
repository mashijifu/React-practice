import React, { useState } from 'react'

const AddTodoBar = ({ addTodo }) => {
    const [inputText, setInputText]=useState("")

    return (
        <div>
            <input 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />

            <button onClick={() => addTodo(inputText)}>追加</button>
            
        </div>
    )
}

export default AddTodoBar

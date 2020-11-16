import React, { useState } from 'react'

const AddTodoBar = ({ addTodo }) => {
    const [inputText, setInputText]=useState("")

    const addAndEmpty = () => {
        addTodo(inputText)
        setInputText("")
    }

    return (
        <div>
            <input 
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />

            <button onClick={addAndEmpty}>追加</button>
            
        </div>
    )
}

export default AddTodoBar
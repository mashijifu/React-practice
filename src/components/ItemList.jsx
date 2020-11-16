import React from 'react'
import Item from './Item'

const ItemList = ({todos, toggleCheckbox, deleteTodo}) => {
    return (
        <ul style={{ listStyle: 'none' }}>
            {todos.map((task, index) => {
                return(
                    <item 
                        key={index}
                        task={task}
                        toggleCheckbox={toggleCheckbox}
                        deleteTodo={deleteTodo}
                    />

                )

            })}
        </ul>
    )
}

export default ItemList

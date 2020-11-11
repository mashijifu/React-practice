import React from 'react'
import Child from './Child.jsx'

const Parent = ({name, color}) => {
    return (
        <div className="box">
            <h1>Parent</h1>
            <h2>Parent({name})</h2>
            <Child name={name} color={color} />
        </div>
    )
}

export default Parent
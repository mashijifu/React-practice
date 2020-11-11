import React from 'react'
import {useState} from 'react'
import Parent from './components/Parent.jsx'
import Button from './components/Button.jsx'

const SecondLesson = () => {
    const [color, setColor] = useState("red")

    return (
        <div className="box">
            <h1>Second Lesson</h1>
            <Parent name="太郎" color={color} />
            <Button whatColor="green" setColor={setColor} />
            {/* <Parent/>
            <Parent/> */}
        </div>
    )
}

export default SecondLesson 
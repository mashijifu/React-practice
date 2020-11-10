import {useState} from 'react';
import Textbox from './components/Textbox.jsx';
import Button from "./components/Button.jsx";

const FirstLesson = () => {
    const name="nob"
    const popAlert = (text) => {
        alert(text)
    }

    // React Hooks
    const [count, setCount] = useState(0)

    const [color, setColor] = useState("blue")

    return (

        <>
            <button
                onClick={() => setCount(count + 1)}
            >
                いいね！({count})
            </button>
            <Textbox
                text="TEXT BOX"
                color="black"
                bgColor={color}
            />
            <div style={{ textAlign: 'center' }}>
                <Button
                whatColor="red"
                setColor={setColor}
                />
                <Button
                whatColor="orange"
                setColor={setColor}
                />
                <Button
                whatColor="green"
                setColor={setColor}
                />
            </div>
        </>
    )
}

export default FirstLesson
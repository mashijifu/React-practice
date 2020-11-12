import {useState} from 'react'

const ChatPage = () => {
    const[input, setInput] = useState("")
    const[messages, setMessages] = useState([
        {user: "クロやぎ", text: "こんにちは"},
        {user: "シロやぎ", text: "こんにちは"}
    ])

    console.log(messages)

    const submitByKuro = () => {
        setMessages([...messages, {user: "クロやぎ", text: input}])
        // setMessages([...messages, {user: messages[0].user, text: input}])
        setInput("")
        
    }

    const submitByShiro = () => {
        setMessages([...messages, {user: "シロやぎ", text: input}])
        // setMessages([...messages, {user: messages[1].user, text: input}])
        setInput("")
        
    }

    return (
        <div className="box">
            <h1>Chat App</h1>
            <div>
                {messages.map((message, index) => {
                    return (
                        <p 
                        className={message.user==="クロやぎ" ? "message-box-kuro" : "message-box-siro"} 
                        key={index}
                        >
                            {message.user} : {message.text}
                        </p>

                    )
                })}
            </div>
            <input value={input} onChange={ (event) => {setInput(event.target.value)} } type="text"/>
            <br />
            <button onClick={submitByKuro}>クロやぎで送信</button>
            <button onClick={submitByShiro}>シロやぎで送信</button>
        </div>
    )
}

export default ChatPage
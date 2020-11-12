import React,{useState, useContext, useHistory} from 'react'
import {Context} from '../Context.jsx'

function LoginPage() {
    const [id, setId]=useState("")
    const [password, setPassword]=useState("")
    const [message, setMessage]=useState("ログインしてください")
    const [setUser]=useContext(Context)
    const history=useHistory()

    const loginCheck = () => {
        const userinfo={id: "taichi", password: "12345"}
        if(id === userinfo.id && password === userinfo.password) {
            setMessage("ログインしました")
            setUser(true)
            history.push("/")
        } else {
            setMessage("ログインに失敗しました")
        }
    }

    return (
        <div className="box">
            <h1>LoginPage</h1>
            <div className="box">
                <p>{message}</p>
                <p>ID</p>
                <input type="text" onChange={(e) => setId(e.target.value) }/>
                <br/>
                <p>PASSWORD</p>
                <input type="password" onChange={(e) => setPassword(e.target.value) } />
                <button onClick={loginCheck}>ログイン</button>
            </div>
        </div>
    )
}

export default LoginPage

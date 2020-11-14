import React,{useState, useContext} from 'react'
import {Context} from '../Context.jsx'
import { useHistory } from "react-router-dom"

function LoginPage() {
    const [id, setId]=useState("")
    const [password, setPassword]=useState("")
    const [message, setMessage]=useState()
    const {setUser}=useContext(Context)
    const history=useHistory()

    const loginCheck = () => {
        const userInfo={id: "taichi", password: "12345"}
        if(id === userInfo.id && password === userInfo.password) {
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
                <p>ID</p>
                <input type="text" onChange={(e) => setId(e.target.value) }/>
                <br/>
                <p>PASSWORD</p>
                <input type="password" onChange={(e) => setPassword(e.target.value) } />
                <button onClick={loginCheck}>ログイン</button>
                {message && <p style={{ color: "red" }}>{message}</p>}
            </div>
        </div>
    )
}

export default LoginPage

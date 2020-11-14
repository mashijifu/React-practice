import React, {useState, useContext} from 'react'
import {Context} from '../Context.jsx'

const Child = React.memo(({name, color}) => {
    const [text, setText] = useState("子どもテキスト")
    const {user, setUser} = useContext(Context)
    // const user=useContext(Context)
      
    return (
        <>
            {user ?
                <div className="box">
                    <h2 style={{ color: color}}>Child</h2>
                    <p>{name}の子供です</p>
                    <h1>{text}</h1>
                    <button onClick={() => {setText("変更されました")} }>テキストを変更</button>
                    <button onClick={() => {setUser("ログアウトされました")} }>Logout</button>
                </div>
                :
                <></>
            
            }
        </>
    )
})

export default Child
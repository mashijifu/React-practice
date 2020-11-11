import React, {useState} from 'react'

const Child = ({name, color}) => {
    const [text, setText] = useState("子どもテキスト")
      
    return (
        <div className="box">
            <h2 style={{ color: color}}>Child</h2>
            <p>{name}の子供です</p>
            <h1>{text}</h1>
            <button onClick={() => {setText("変更されました")} }>テキストを変更</button>
        </div>
    )
}

export default Child
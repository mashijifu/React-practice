import React, {useContext} from 'react'
import {Context} from '../Context.jsx'

const AdminPage = () => {
    const {user, setUser} = useContext(Context)

    return (
        <>
            <h1>管理画面</h1>
            <button onClick={() => setUser(true)}>ログイン</button>
            {user ? 
                <>
                    <p>ログインしています！！！！</p>
                    <p>マイプロフィール</p>
                    <p>名前</p>
                    <button onClick={() => setUser(false)}>ログアウト</button>
                </>
                : 
                <>
                    <p>ログインしてください</p>
                    <button onClick={() => setUser(true)}>ログアウト</button>
                </>
            }
        </>
    )
}




export default AdminPage
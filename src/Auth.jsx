import React, { useContext } from 'react'
import {Redirect} from 'react-router-dom'
import {Context} from "./Context"

const Auth = ({children}) => {
    const user=useContext(Context)
    
    return (
        <>
            {user ?
                <>{children}</>
                :
                <Redirect to="/login" />
            } 
        </>
    )


    // if(user) {
    //     return <>{children}</>
    // } else {
    //     return <Redirect to="/login" />
    // }
}

export default Auth
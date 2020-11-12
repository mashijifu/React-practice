import React, {useState} from 'react'

export const Context = React.createContext("init")

const ContextProvider = ({children}) => {
    const [user, setUser]=useState(false)
    const [color, setColor]=useState("red")
    return (
        <Context.Provider value={[user, setUser]}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
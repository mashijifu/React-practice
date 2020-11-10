import {useState} from 'react';
import TodoList from './TodoList.jsx'
import FirstLesson from './FirstLesson.jsx'
import Chat from './Chat.jsx'
import "./style.css";

const App = () => {

    return (

        <div>

            <TodoList />

            <FirstLesson />

            <Chat />
        
        </div>
    );
}

export default App;

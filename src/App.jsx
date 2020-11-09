import {useState} from 'react';
import TodoList from './TodoList.jsx'
import FirstLesson from './FirstLesson.jsx'
import "./style.css";

const App = () => {

    return (

        <div>

            <TodoList />

            <FirstLesson />
        
        </div>
    );
}

export default App;

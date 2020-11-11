import {useState} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import TodoList from './TodoList.jsx'
import FirstLesson from './FirstLesson.jsx'
import Chat from './Chat.jsx'
import ClassComponent from './Class.jsx'
import SecondLesson from './SecondLesson.jsx'
import "./style.css";

const App = () => {

    return (

        <div>

            <BrowserRouter>
                <h1>TOP PAGE</h1>
                <Link to="/">FirstLesson</Link>
                <Link to="/todo">TodoApp</Link>
                <Link to="/chat">ChatApp</Link>
                <Link to="/class">ClassComponent</Link>
                <Link to="/second">SecondLesson</Link>
                <Switch>
                    <Route exact path='/' component={FirstLesson} />
                    <Route exact path='/todo' component={TodoList} />
                    <Route exact path='/chat' component={Chat} />
                    <Route exact path='/class' component={ClassComponent} />
                    <Route exact path='/second' component={SecondLesson} />
                </Switch>
            </BrowserRouter>
            {/* <TodoList />

            <FirstLesson />

            <Chat /> */}
        
        </div>
    );
}

export default App;

import {useState} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import TodoPage from './pages/TodoPage.jsx'
import FirstLesson from './pages/FirstLesson.jsx'
import ChatPage from './pages/ChatPage.jsx'
import ClassComponent from './pages/Class.jsx'
import SecondLesson from './pages/SecondLesson.jsx'
import ContextProvider from './Context.jsx'
import AdminPage from './pages/AdminPage.jsx'
import Auth from './Auth.jsx'
import LoginPage from './pages/LoginPage.jsx'
import MaterialTodoPage from './pages/MaterialTodoPage.jsx'
import "./style.css";

const App = () => {

    return (

        <BrowserRouter>
            <ContextProvider>
                <h1>TOP PAGE</h1>
                <div className="">
                    <Link className="box" to="/">FirstLesson</Link>
                    <Link className="box" to="/todo">TodoApp</Link>
                    <Link className="box" to="/chat">ChatApp</Link>
                    <Link className="box" to="/class">ClassComponent</Link>
                    <Link className="box" to="/second">SecondLesson</Link>
                    <Link className="box" to="/admin">ログインページ</Link>
                    <Link className="box" to="/material">MaterialTodo</Link>

                </div>
                <Switch>
                    <Route exact path='/login' component={LoginPage} />
                    <Auth>
                        <Switch>
                            <Route exact path='/' component={FirstLesson} />
                            <Route exact path='/todo' component={TodoPage} />
                            <Route exact path='/chat' component={ChatPage} />
                            <Route exact path='/class' component={ClassComponent} />
                            <Route exact path='/second' component={SecondLesson} />
                            <Route exact path='/admin' component={AdminPage} />
                            <Route exact path='/material' component={MaterialTodoPage} />
                        </Switch>
                    </Auth>
                </Switch>
            </ContextProvider>
        </BrowserRouter>
    );
}

export default App;

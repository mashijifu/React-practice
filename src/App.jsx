import {useState} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import TodoList from './pages/TodoList.jsx'
import FirstLesson from './pages/FirstLesson.jsx'
import ChatPage from './pages/ChatPage.jsx'
import ClassComponent from './pages/Class.jsx'
import SecondLesson from './pages/SecondLesson.jsx'
import ContextProvider from './Context.jsx'
import AdminPage from './pages/AdminPage.jsx'
import Auth from './Auth.jsx'
import LoginPage from './pages/LoginPage.jsx'
import "./style.css";

const App = () => {

    return (

        <div>

            <BrowserRouter>
                <ContextProvider>
                    <h1>TOP PAGE</h1>
                    <Link className="box" to="/">FirstLesson</Link>
                    <Link className="box" to="/todo">TodoApp</Link>
                    <Link className="box" to="/chat">ChatApp</Link>
                    <Link className="box" to="/class">ClassComponent</Link>
                    <Link className="box" to="/second">SecondLesson</Link>
                    <Link className="box" to="/admin">ログインページ</Link>

                    <Switch>
                        <Route exact path='/login' component={LoginPage} />
                        <Auth>
                            <Switch>
                                <Route exact path='/' component={FirstLesson} />
                                <Route exact path='/todo' component={TodoList} />
                                <Route exact path='/chat' component={ChatPage} />
                                <Route exact path='/class' component={ClassComponent} />
                                <Route exact path='/second' component={SecondLesson} />
                                <Route exact path='/admin' component={AdminPage} />
                            </Switch>
                        </Auth>
                    </Switch>
                </ContextProvider>
            </BrowserRouter>
            {/* <TodoList />

            <FirstLesson />

            <Chat /> */}
        
        </div>
    );
}

export default App;

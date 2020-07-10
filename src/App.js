import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import New from './components/New';
import CompletedList from './components/CompletedList';

class App extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <div id="container">
                    <Route exact path="/" component={ ToDoList } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/register" component={ Register } />
                    <Route exact path="/new" component={ New } />
                    <Route exact path="/completed" component={ CompletedList } />
                </div>
            </Router>
        );
    }
}

export default App;
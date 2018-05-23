import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/home';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Stay from "./pages/Stay";
import Go from "./pages/Go";
import GoTo from "./pages/GoTo";
import NewHome from "./pages/NewHome";

if(localStorage.getItem("id_token")) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={NewHome} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile/:id/stay" component={Stay} />
            <Route exact path="/profile/:id/go" component={Go} />
            <Route exact path="/stay" component={Stay} />
            <Route exact path="/go" component={Go} />
            <Route exact path="/goto/:from/:dest/:zip" component={GoTo} />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();

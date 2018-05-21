import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../components/AuthService';
import API from '../utils/API';
import axios from "axios";
import LoginPop from "../components/LoginPop";
import Login from "./Login";

class NewHome extends Component {
    state= {
        clicked: ""
    }
    
    render() {
        return (
            <div>
            <Link to="/signup" role="button" className="">
            <div className="btn login-button">
            <button className="btn">Signup</button>
            </div>
            </Link>
            <Link to="/login" role="button" className="">
            <div className="btn login-button">
            <button className="btn">Login</button>
            </div>
            </Link>
            
                
            </div>
        )
    }
};

export default NewHome;
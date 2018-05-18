import React, { Component } from 'react';
import '../../components/homepage/style.css';
import {Link, Route} from "react-router-dom";

class GoButton extends Component {
    

    render() {
        return (
            <Link to="/go" role="button" className="">
            <div className="btn go-button">
            <button className="btn">Go</button>
            </div>
            </Link>
        );
      }
}

export default GoButton;

import React, { Component } from 'react';
import '../../components/homepage/style.css';
import {Link, Route} from "react-router-dom";

class StayButton extends Component {
    

    render() {
        return (
            <Link to="/stay" role="button" className="">
            <div className="btn stay-button">
            <button className="btn">Stay</button>
            </div>
            </Link>
        );
      }
}

export default StayButton;

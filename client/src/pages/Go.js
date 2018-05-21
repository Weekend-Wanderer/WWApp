import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import GoPage from "../components/gopage";

class Go extends Component {
    state = {
        myzipcode: 92109
    }
    componentDidMount() {
      
    }
    render() {
        return (
        <div>
        <GoPage />
        </div>
        )}
}
export default Go;
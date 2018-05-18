import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


class Stay extends Component {
    
    componentDidMount() {
        axios.post("/api/yelp/92109").then(function (data) {
            console.log(data);
        })
    }
    render() {
        return (
        <h1>Hello World, Let's GO!</h1>
        )}
}
export default Stay;
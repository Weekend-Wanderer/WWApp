import React, { Component } from 'react';
import AuthService from '../components/AuthService';
import withAuth from '../components/withAuth';
import Homepage from "../components/homepage";

const Auth = new AuthService();

class Home extends Component {

  render() {
    console.log(this.props.user)
    return (
        <Homepage />
    );
  }
}

export default Home;

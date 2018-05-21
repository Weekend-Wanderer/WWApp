import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../components/homepage/style.css';
import GoButton from '../homepage/gobutton';
import { Alert } from 'react-bootstrap';

import StayButton from '../homepage/staybutton';


import AuthService from '../../components/AuthService';
import withAuth from '../../components/withAuth';
const Auth = new AuthService();

class Home extends Component {

  state = {
    userId: this.props.user.id,
    profileLink: ""
  };

  componentDidMount() {
    const profileLinkURL = `/profile/${this.state.userId}`;
    this.setState({
      profileLink: profileLinkURL
    });
  }

  handleLogout = () => {
    Auth.logout();
    this.props.history.replace('/signup');
  };

  goToEditProfile = () => {
    this.props.history.replace(this.state.profileLink);
  };

  render() {
    console.log(this.props.user)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome {this.props.user.email}</h2>
          <p className="App-intro">
          <button type="button" className="btn btn-primary" onClick={this.goToEditProfile}>Go to Profile</button>
          <button type="button" className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
        </p>
        </div>
        <StayButton />
        <GoButton />
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
          good.
        </Alert>;
      </div>
    );
  }
}

export default withAuth(Home);

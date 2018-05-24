import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../components/homepage/style.css';
import GoButton from '../homepage/gobutton';
import StayButton from '../homepage/staybutton';
import logoInv from '../../imgs/WW_logo_stay_go_invert.png';


import AuthService from '../../components/AuthService';
import withAuth from '../../components/withAuth';
const Auth = new AuthService();

class Home extends Component {

  state = {
    // userId: this.props.user.id,
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
        <Link className="home-btn" to="/">
          <div className="glyphicon glyphicon-home wonderer-icon">
          </div>
        </Link>
        <StayButton />
        <GoButton />
        <a className="invert-logo" href="https://www.youtube.com/watch?v=xfr64zoBTAQ" target="_blank">
          <img src={logoInv} alt="weekend-invert-logo" />
        </a>
            </div>
    );
  }
}

export default Home;

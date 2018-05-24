import React, { Component } from 'react';
import AuthService from '../components/AuthService';
import { Link } from 'react-router-dom';
import logo from "../imgs/WW_logo_stay_go_invert.png";
class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    // if (this.Auth.loggedIn()) {
    //   this.props.history.replace('/');
    // }
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        console.log(res);
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/home`);
      })
      .catch(err => alert(err));

  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="background">
        <div className="container">
        <div className="row">
            <div className="col-sm-1">
              <img className="signup-logo" src={logo} alt="logo" />
            </div>
            <div className="col-sm-11">
              <h1 className="signuptitle">Login</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-box">
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <label className="signuplabel" htmlFor="email">Email address:</label>
                  <input className="form-control"
                    placeholder="Email goes here..."
                    name="email"
                    type="email"
                    id="email"
                    onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label className="signuplabel" htmlFor="pwd">Password:</label>
                  <input className="form-control"
                    placeholder="Password goes here..."
                    name="password"
                    type="password"
                    id="pwd"
                    onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-success">Login</button>
              </form>
              <hr/>
              <h2 className="login-col-title">Or...</h2>
              <Link to="/signup"><button className="login-link">Go to Signup</button></Link>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>

    );
  }
}

export default Login;
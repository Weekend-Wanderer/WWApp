import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../components/AuthService';
import API from '../utils/API';
import axios from "axios";
import logo from "../imgs/WW_logo_stay_go_invert.png";


class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  state = {
    zipcode: "",
    lat: "",
    lng: ""

  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/');
    }


  }

  handleFormSubmit = event => {
    event.preventDefault();
    const b = this;
    const zipcode = this.state.zipcode;
    if (zipcode.length === 5) {
      axios.get(`/api/zipconverter/${zipcode}`).then(function (data) {
        console.log(data);
        b.setState({ lat: data.data[zipcode].lat });
        b.setState({ lng: data.data[zipcode].lng });
      }).then(function () {
        API.signUpUser(b.state.username, b.state.email, b.state.password, b.state.zipcode, b.state.lat, b.state.lng)
          .then(res => {
            console.log(res.data);
            // once the user has signed up
            // send them to the login page
            b.props.history.replace('/login');
          })
          .catch(err => alert(err));
      })


    } else {
      alert("zipcode is not long enough");
    }
    ;
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getZipcode = (event) => {
    event.preventDefault();
    const zip = this;
    axios.get("https://ipapi.co/json")
      .then(function (data) {
        console.log(data.data.postal);
        zip.setState({ zipcode: data.data.postal });
        console.log(zip.state.zipcode);
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
              <h1 className="signuptitle">Signup</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-box">
                <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                    <label className="signuplabel" htmlFor="username">Name:</label>
                    <input className="form-control"
                      placeholder="Name goes here..."
                      name="username"
                      type="text"
                      id="username"
                      onChange={this.handleChange} />
                  </div>
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
                  <div className="form-group">
                    <label className="signuplabel" htmlFor="zipcode">Zipcode:</label>
                    <input className="form-control"
                      placeholder="Zipcode..."
                      name="zipcode"
                      value={this.state.zipcode}
                      type="text"
                      id="zipcode"
                      onChange={this.handleChange}></input>
                      <button className="btn btn-primary search-button" onClick={this.getZipcode}><span className="glyphicon glyphicon-search"/></button>
                  </div>
                  
                  <button type="submit" className="btn btn-success">Signup</button>
                </form>
                <hr />
                <h2 className="login-col-title">Or...</h2>
                <Link to="/login"><button className="login-link">Go to Login</button></Link>
              </div>



            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
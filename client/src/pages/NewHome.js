import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel } from 'react-bootstrap';
import logo from '../imgs/WW_logo_thicc.png';
import slide1 from '../imgs/islands.jpg';
import slide2 from '../imgs/B_on_hay.jpg';
import slide3 from '../imgs/lifeguard.jpg';
import slide4 from '../imgs/hot-air-balloon.jpg';
import slide5 from '../imgs/dog-travel.jpg';
import demo from '../imgs/iPhone-demo copy.jpg';
import soloTravel from '../imgs/Millennial-Travel.jpg';
import girlTravel from '../imgs/girls-roadtrip.jpg';
import AuthService from '../components/AuthService';
import API from '../utils/API';
import axios from "axios";
import LoginPop from "../components/LoginPop";
import Login from "./Login";
import './NewHome.css';

class NewHome extends Component {
    state = {
        clicked: "",
        showLoadingScreen: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showLoadingScreen: false
            });
        }, 100)
    }

    loadingComp = () => {

        return (
            <div className="triangle-wrapper">
                <div className="triangle triangle-1">
                    <svg className="triangle-svg" viewBox="0 0 140 141">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <polygon className="triangle-polygon" points="20 0, 0 20, 30 50, 0 80, 20 100, 50 70, 80 100, 100 80, 70 50, 100 20, 80 0, 50 30"></polygon>
                        </g>
                    </svg></div>
                <div className="triangle triangle-2">
                    <svg className="triangle-svg" viewBox="0 0 140 141">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <polygon className="triangle-polygon" points="20 0, 0 20, 30 50, 0 80, 20 100, 50 70, 80 100, 100 80, 70 50, 100 20, 80 0, 50 30"></polygon>
                        </g>
                    </svg></div>
                <div className="triangle triangle-3">
                    <svg className="triangle-svg" viewBox="0 0 140 141">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <polygon className="triangle-polygon" points="20 0, 0 20, 30 50, 0 80, 20 100, 50 70, 80 100, 100 80, 70 50, 100 20, 80 0, 50 30"></polygon>
                        </g>
                    </svg></div>
                <div className="triangle triangle-4">
                    <svg className="triangle-svg" viewBox="0 0 140 141">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <polygon className="triangle-polygon" points="20 0, 0 20, 30 50, 0 80, 20 100, 50 70, 80 100, 100 80, 70 50, 100 20, 80 0, 50 30"></polygon>
                        </g>
                    </svg></div>
                <div className="triangle triangle-5">
                    <svg className="triangle-svg" viewBox="0 0 140 141">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <polygon className="triangle-polygon" points="20 0, 0 20, 30 50, 0 80, 20 100, 50 70, 80 100, 100 80, 70 50, 100 20, 80 0, 50 30"></polygon>
                        </g>
                    </svg>
                </div>
                <p className="triangle-loading">Wandering</p>
            </div>
        )
    }

    mainPageDisplay = () => {
        return (
            <div className="parallax">
            <div id="parallax_group1Carousel">
                    <div className="parallax__layer">
                        <Carousel>
                            <Carousel.Item>
                                <img className="slide1" alt="one" src={slide1} />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="slide2" alt="two" src={slide2} />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="slide3" alt="three" src={slide3} />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="slide4" alt="four" src={slide4} />
                                <Carousel.Caption>
                                    <h3></h3>
                                    <p></p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="slide5" alt="five" src={slide5} />
                                <Carousel.Caption>
                                    <h3></h3>
                                    <p></p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                        </div>
                    
                </div>
                <div id="parallax_group1Logo">
                    <div className="parallax__layer">
                        <img className="main-logo" src={logo} alt="logo" />
                    </div>
                    </div>
                <div id="parallax_group1" className="parallax__group">
                    <div id="parallax_group1Brand">
                    <div className="parallax__layer">
                        <h1 className="title-header">Weekend Wanderer</h1>
                        </div>
                    </div>
                    <div className="parallax__layer">
                        <div className="buttons">
                            <Link id="signupBtn" to="/signup" role="button" className="signup-login-button">
                                Signup
                            </Link>
                            <Link id="loginBtn" to="/login" role="button" className="signup-login-button">
                                Login
                            </Link>
                        </div>
                    </div>
                    </div>
                       {/*end of first group*/}
                {/*Begining of second group*/}

                <div id="parallax_group2" className="parallax__group">
                    <div className="parallax__layer parallax__layer--base">
                        <div className="container">
                            <div className="row">
                                <h1 className="message">
                                    Choose your path</h1>
                                <h1>
                                    Let the button decide</h1>
                                <h2 className="message">
                                    Introducing the easiest way to find great trips
                        </h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end of second group*/}


                <div id="parallax_group3" className="parallax__group">
                    <div id="parallax_group3SoloTravel">
                    <div className="parallax__layer parallax__layer--back">
                    <div className="img-container">
                        <img className="pic2" src={soloTravel} alt="solo-gal" />
                    </div>
                    </div>
                    </div>
                </div>



                <div id="parallax_group4minus1">
                <div className="">
                    <div className="container">
                        <div className="row">
                            <h1 className="message">
                                A complete trip in just one tap
                            </h1>
                            <h2 className="message">
                                Say goodbye to hours of planning
                            </h2>
                        </div>
                    </div>
                    </div>
                    <div id="parallax_group4img">
                    <div className="img-container">
                        <img src={demo} className="pic3" alt="travel-gal" />
                    </div>
                    </div>
                    <div id="parallax_group4text2">
                    <div className="container">
                        <div className="row">
                            <h1 className="message">
                                Meet new people around the world
                            </h1>
                            <h2 className="message">
                                Making new friends for life!
                            </h2>
                        </div>
                    </div>
                    </div>
                    <div id="parallax_group4">
                    <div className="img-container">
                    <img className="pic4" src={girlTravel} alt="group" />
                    </div>
                </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className={this.state.showLoadingScreen ? 'x-loader' : ""}>
                {this.state.showLoadingScreen ? this.loadingComp() : this.mainPageDisplay()}
            </div>
        )
    }
};

export default NewHome;
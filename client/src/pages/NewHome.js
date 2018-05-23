import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel } from 'react-bootstrap';
import logo from '../imgs/WW_logo_thicc.png';
import slide1 from '../imgs/islands.jpg';
import slide2 from '../imgs/B_on_hay.jpg';
import slide3 from '../imgs/lifeguard.jpg';
import slide4 from '../imgs/hot-air-balloon.jpg';
import slide5 from '../imgs/dog-travel.jpg';
import slide6 from '../imgs/san-diego-skyline.jpg';
import groupTravel from '../imgs/group-travel.png';
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
        }, 6000)
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
                <p className="triangle-loading">Loading</p>
            </div>
        )
    }

    mainPageDisplay = () => {
        return (
            <div>
                <img className="main-logo" src={logo} alt="logo" />
                <h1 className="title-header">Weekend Wanderer</h1>

                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#https://www.youtube.com/watch?v=dQw4w9WgXcQ">Weekend Wanderer</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                About
                            </NavItem>
                            <NavItem eventKey={2} href="#">

                            </NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Drop it</MenuItem>
                                <MenuItem eventKey={3.2}>To the Floor</MenuItem>
                                <MenuItem eventKey={3.3} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Drop it Like it's Hot</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">
                                <Link to="/signup" role="button" className="">
                                    <div className="btn login-button">
                                        <button className="btn">Signup</button>
                                    </div>
                                </Link>
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                <Link to="/login" role="button" className="">
                                    <div className="btn login-button">
                                        <button className="btn">Login</button>
                                    </div>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>;

        <Carousel>
                    <Carousel.Item>
                        <img className="slide1" alt="one" src={slide1} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slide2" alt="two" src={slide2} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slide3" alt="three" src={slide3} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slide4" alt="four" src={slide4} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slide5" alt="five" src={slide5} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slide6" alt="six" src={slide6} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>;
            
                <div className="container">
                    <div className="row">
                        <h1 className="first-message"> Let the Beat Control Your Body</h1>
                    </div>
                </div>

{/* add paralax to pics */}

                <div  className="pic2" src={soloTravel} alt="solo-gal">
                </div>
                <div className="container">
                    <div className="row">
                        <h1 className="second-message"> Let the Beat Control Your Body</h1>
                    </div>
                </div>
                
                <div className="pic3" src={girlTravel} alt="travel-gal">
</div>
                <div className="container">
                    <div className="row">
                        <h1 className="third-message"> Let the Beat Control Your Body</h1>
                    </div>
                </div>
                
                <div  className="pic4" src={groupTravel} alt="group">
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
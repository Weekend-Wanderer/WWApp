import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel } from 'react-bootstrap';
import logo from '../imgs/WW_logo_thicc.png';
import pics from '../imgs/islands.jpg';
import picss from '../imgs/travel.jpg';
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
                <div className="buttons">
                    <Link to="/signup" role="button" className="signup-login-button">
                        Signup
                    </Link>
                    <Link to="/login" role="button" className="signup-login-button">
                        Login
                    </Link>
                </div>
                <Carousel>
                    <Carousel.Item>
                        <img width={2000} height={768} alt="900x500" src={pics} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={2000} height={500} alt="900x500" src={picss} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={2000} height={500} alt="900x500" src={pics} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>;

                <div className="container">
                    <div className="row">
                        <h1 className="first-message"> Let the Beat Control Your Body</h1>
                    </div>
                </div>

                {/* add paralax to pics */}

                <img src={girlTravel} alt="travel-gal" />



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
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Carousel } from 'react-bootstrap';
import logo from '../WW_logo_active.png';
import pics from '../islands.jpg';
import picss from '../travel.jpg'
import AuthService from '../components/AuthService';
import API from '../utils/API';
import axios from "axios";
import LoginPop from "../components/LoginPop";
import Login from "./Login";

class NewHome extends Component {
    state = {
        clicked: ""
    }

    render() {
        return (
            <div>
                <img className="main-logo" src={logo} alt="logo" />
                <h1 className="title-header">Weekend Wanderer</h1>

                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">Weekend Wanderer</a>
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
                        <img width={900} height={500} alt="900x500" src={pics} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={picss} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={pics} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>;
                
            

                
                


            </div>
        )
    }
};

export default NewHome;
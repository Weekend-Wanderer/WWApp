import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import API from '../utils/API';
import withAuth from '../components/withAuth';
import ImageCard from "../components/ImageCard";
import EventCard from "../components/EventCard";
import Wrapper from "../components/Wrapper";
import "./Stay.css";

class Stay extends Component {
    state = {
        showLoadingScreen: true,
        username: "",
        zipcode: "",
        restaurantsRow1: [],
        restaurantsRow2: [],
        eventsRow1: [],
        eventsRow2: []
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showLoadingScreen: false
            });
        }, 2000)
        const b = this;
        API.getUser(this.props.user.id).then(res => {
            this.setState({
                username: res.data.username,
                zipcode: res.data.zipcode,
                lat: res.data.lat,
                lng: res.data.lng
            });
            axios.post(`/api/yelp/${b.state.zipcode}`).then(function (data) {
                const restaurantsRow1 = [];
                const restaurantsRow2 = [];
                for (let i = 0; i <= 2; i++) {
                    restaurantsRow1.push(data.data[i]);
                }
                for (let i = 3; i <= 5; i++) {
                    restaurantsRow2.push(data.data[i]);
                }

                b.setState({
                    restaurantsRow1: restaurantsRow1,
                    restaurantsRow2: restaurantsRow2

                });
            })
            axios.post(`/api/meetup/${b.state.zipcode}`).then(function (data) {
                console.log(data);
                const eventsRow1 = [];
                const eventsRow2 = [];
                for (let i = 0; i <= 2; i++) {
                    eventsRow1.push({
                        eventName: data.data[i].name,
                        eventLink: data.data[i].link,
                        lat: data.data[i].venue_lat,
                        lng: data.data[i].venue_lng
                    });
                }
                for (let i = 3; i <= 5; i++) {
                    eventsRow2.push({
                        eventName: data.data[i].name,
                        eventLink: data.data[i].link,
                        lat: data.data[i].venue_lat,
                        lng: data.data[i].venue_lng
                    });
                }

                b.setState({
                    eventsRow1: eventsRow1,
                    eventsRow2: eventsRow2

                });
            })

        });
    }
    loadingComp = () => {
        const $triangles = document.querySelectorAll('.triangle')

        // Array.prototype.forEach.call($triangles, ($triangle, index) => {
        //     $triangle.innerHTML = template
        // });
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
                <div className="background">
                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a className="pageTitle" href="#brand">Stay</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavDropdown eventKey={3} title={this.state.username} id="basic-nav-dropdown">
                                    <MenuItem eventKey={3.1}>Drop it</MenuItem>
                                    <MenuItem eventKey={3.2}>To the Floor</MenuItem>
                                    <MenuItem eventKey={3.3} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Drop it Like it's Hot</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={2} href="#">
                                    <Link to="/" role="button" className="">
                                        <div className="glyphicon glyphicon-home">

                                        </div>
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>;
    
    
                <div className="container">
                        <div className="yelp-cards">
                            <h2>Places to Eat:</h2>
                            <div className="row">
                                {this.state.restaurantsRow1.map(restaurant =>
                                    <div className="col-md-4">
                                        <ImageCard title={restaurant.name} link={restaurant.url} lat={restaurant.coordinates.latitude} lng={restaurant.coordinates.longitude} />
                                    </div>
                                )
                                }
                            </div>
                            <div className="row">
                                {this.state.restaurantsRow2.map(restaurant =>
                                    <div className="col-md-4">
                                        <ImageCard title={restaurant.name} link={restaurant.url} lat={restaurant.coordinates.latitude} lng={restaurant.coordinates.longitude} />
                                    </div>
                                )
                                }
                            </div>
                        </div>
                        <div className="meetup-cards">
                            <h2>Things to Do:</h2>
                            <div className="row">
                                {this.state.eventsRow1.map(event =>
                                    <div className="col-md-4">
                                        <EventCard name={event.eventName} lat={event.lat} lng={event.lng} link={event.eventLink} />
                                    </div>
                                )
                                }
                            </div>
                            <div className="row">
                                {this.state.eventsRow2.map(event =>
                                    <div className="col-md-4">
                                        <EventCard name={event.eventName} lat={event.lat} lng={event.lng} link={event.eventLink} />
                                    </div>
                                )
                                }
                            </div>
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
}
export default withAuth(Stay);
import React, { Component } from 'react';
import '../components/gotopage/style.css';
// import GoButton from '../homepage/gobutton';
import { Alert, Navbar, FormGroup, FormControl, Button, Well } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

// import StayButton from '../homepage/staybutton';
import AuthService from '../components/AuthService';
import withAuth from '../components/withAuth';
import axios from "axios";
import { SearchZip } from "../components/gotopage";
import { Wrapper } from "../components/Wrapper";
import ImageCard from "../components/ImageCard";
import EventCard from "../components/EventCard";
import { MeetupEventCard } from "../components/MeetupEventCard";
import SnapMapGoTo from "../components/SnapMapGoTo";
import { Link } from "react-router-dom";
import logo from "../imgs/WW_logo_thicc.png";
const Auth = new AuthService();

class GoTo extends Component {

    state = {
        // userId: this.props.user.id,
        myzipcode: "",
        profileLink: "",
        lat: "",
        lng: "",
        meetupRow1: [],
        meetupRow2: [],
        yelpRow1: [],
        yelpRow2: []
    };

    componentDidMount() {
        const profileLinkURL = `/profile/${this.state.userId}`;

        var thethis = this;

        axios.get("/api/zipconverter/" + this.props.match.params.zip)
            .then(function (data) {
                console.log(data.data);
                thethis.setState({
                    lat: data.data[thethis.props.match.params.zip].lat,
                    lng: data.data[thethis.props.match.params.zip].lng
                });
            })
        this.setState({
            profileLink: profileLinkURL,
            from: this.props.match.params.from,
            destination: this.props.match.params.dest,
            myzipcode: this.props.match.params.zip
        });
        thethis = this;
        setTimeout(function () { thethis.handleAPIS(); }, 100);




    }
    handleAPIS = () => {
        this.handleZip();
        this.handleYelp();
        this.handleMeetup();


    }
    handleZip = () => {
        var thethis = this;
        if (this.state.myzipcode !== "") {
            axios.get("/api/zipconverter/" + this.state.myzipcode)
                .then(function (data) {
                    console.log(data.data);
                    thethis.setState({
                        lat: data.data[thethis.state.myzipcode].lat,
                        lng: data.data[thethis.state.myzipcode].lng
                    });
                })
        }
    }
    handleMeetup = () => {
        var thethis = this;
        if (this.state.myzipcode !== "") {
            axios.post("/api/meetup/" + this.state.myzipcode).then(function (data) {
                console.log(data.data);
                var meetupRow1 = [];
                var meetupRow2 = [];

                for (var j = 0; j < 3; j++) {
                    meetupRow1.push({
                        eventName: data.data[j].name,
                        eventLink: data.data[j].link,
                        lat: data.data[j].venue_lat,
                        lng: data.data[j].venue_lng
                    });
                }
                for (var j = 3; j < 6; j++) {
                    meetupRow2.push({
                        eventName: data.data[j].name,
                        eventLink: data.data[j].link,
                        lat: data.data[j].venue_lat,
                        lng: data.data[j].venue_lng
                    });
                }
                
                
                thethis.setState({
                    meetupRow1: meetupRow1,
                    meetupRow2: meetupRow2
                });
            })
        }
    }
    handleYelp = () => {
        var thethis = this;
        if (this.state.myzipcode !== "") {
            axios.post("/api/yelp/" + this.state.myzipcode).then(function (data) {
                console.log(data.data);
                var yelpRow1 = [];
                var yelpRow2 = [];
                for (var i = 0; i < 3; i++) {
                    yelpRow1.push(data.data[i]);
                }
                for (var i = 3; i < 6; i++) {
                    yelpRow2.push(data.data[i]);
                }

                thethis.setState({
                    yelpRow1: yelpRow1,
                    yelpRow2: yelpRow2
                });
            })
        }
    }
    handleinput = (event) => {
        var value = event.target.value;

        this.setState({
            myzipcode: value
        })
    }
    handleLogout = () => {
        Auth.logout();
        this.props.history.replace('/signup');
    };

    goToEditProfile = () => {
        this.props.history.replace(this.state.profileLink);
    };

    render() {
        console.log(this.state.myzipcode);
        return (
            <Wrapper>
                <a  href="/home"><img className="stay-logo" alt="logo" src={logo}/></a>
                <h1>Go to: {this.state.destination}</h1>
                <SearchZip searchzipcode={this.state.myzipcode} buttonhandle={this.handleAPIS} handleinput={(event) => this.handleinput(event)} />
                <div>
                    <SnapMapGoTo lat={this.state.lat} lng={this.state.lng} />
                </div>
                <div>
                    <Row>
                        <Col>
                        <h2>Places To Eat:</h2>
                            {this.state.yelpRow1.map(ylp => (
                                <div className="col-md-4">
                                <ImageCard title={ylp.name} link={ylp.link} lat={ylp.coordinates.latitude} lng={ylp.coordinates.longitude} />
                                </div>
                            ))}
                            {this.state.yelpRow2.map(ylp => (
                                <div className="col-md-4">
                                <ImageCard title={ylp.name} link={ylp.link} lat={ylp.coordinates.latitude} lng={ylp.coordinates.longitude} />
                                </div>
                            ))}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h2>Things to Do:</h2>
                        {this.state.meetupRow1.map(event =>
                                    <div className="col-md-4">
                                        <EventCard name={event.eventName} lat={event.lat} lng={event.lng} link={event.eventLink} />
                                    </div>
                                )
                                }
                            {this.state.meetupRow2.map(event =>
                                    <div className="col-md-4">
                                        <EventCard name={event.eventName} lat={event.lat} lng={event.lng} link={event.eventLink} />
                                    </div>
                                )
                                }
                        </Col>
                    </Row>

                </div>
            </Wrapper>);
    }
}

export default withAuth(GoTo);

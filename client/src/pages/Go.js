import React, { Component } from 'react';
import logo from '../logo.svg';
import '../components/gotopage/style.css';
// import GoButton from '../homepage/gobutton';
import { Alert, Navbar,FormGroup,FormControl,Button, Well } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
// import StayButton from '../homepage/staybutton';
import AuthService from '../components/AuthService';
import withAuth from '../components/withAuth';
import axios from "axios";
import {SearchZip} from "../components/gotopage";
import {Wrapper} from "../components/Wrapper";

const Auth = new AuthService();

class GoTo extends Component {

    state = {
        // userId: this.props.user.id,
        myzipcode: "--",
        profileLink: "",
        lat: "",
        lng: "",
        meetup: [],
        yelp: [],
        flight:[]
    };

    componentDidMount() {
        const profileLinkURL = `/profile/${this.state.userId}`;
        this.setState({
            profileLink: profileLinkURL,
            myzipcode: this.props.user.zipcode,
            lat: this.props.user.lat,
            lng: this.props.user.lng
        })
  
        
    }
    handleAPIS = ()=>{
        this.handleFlight();
        this.handleYelp();
        this.handleMeetup();
    }
    handleFlight = () =>{
        var thethis = this;
        if(this.state.myzipcode!==""){
            axios.get("/api/flightsthisweek/LAX/SAN").then(function (data) {
                // console.log(data.data);
                thethis.setState({
                    flight: data.data.scheduledFlights
                });
            })
        }
    }
    handleMeetup = () =>{
        var thethis = this;
        if(this.state.myzipcode!==""){
            axios.post("/api/meetup/" + this.state.myzipcode).then(function (data) {
                // console.log(data.data);
                thethis.setState({
                    meetup: data.data
                });
            })
        }
    }
    handleYelp = ()=> {
        var thethis = this;
        if(this.state.myzipcode!==""){
            axios.post("/api/yelp/" + this.state.myzipcode).then(function (data) {
                // console.log(data.data);
                thethis.setState({
                    yelp: data.data
                });
            })
        }
    }
    handleinput = (event) =>{
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
        return (
            <Wrapper>
                <h1>GO!</h1>
                <SearchZip searchzipcode={this.state.myzipcode} buttonhandle={this.handleAPIS} handleinput={this.handleinput}/>
<div>
                <Well bsSize="large">{JSON.stringify(this.state.flight)}</Well>
                <Well bsSize="large">{JSON.stringify(this.state.yelp)}</Well>
                <Well bsSize="large">{JSON.stringify(this.state.meetup)}</Well>
                </div>
      </Wrapper>
        );
    }
}

export default withAuth(GoTo);

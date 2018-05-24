import React, { Component } from 'react';
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
import {FlightCard} from "../components/FlightCard";
import {MeetupEventCard} from "../components/MeetupEventCard";
import logo from "../imgs/WW_logo_thicc.png";

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
        flight1:[],
        flight2:[],

        flight3:[],
        flight4:[],

        flight5:[],
        flight6:[],

        flight7:[],
        flight8:[],

        flight9:[],
        flight10:[]

    };

    componentDidMount() {
        const profileLinkURL = `/profile/${this.state.userId}`;
        this.setState({
            profileLink: profileLinkURL,
            myzipcode: this.props.user.zipcode,
            lat: this.props.user.lat,
            lng: this.props.user.lng
        })
  
        this.handleAPIS();
    }
    handleAPIS = ()=>{
        var base = "SAN"
        var citiesvisit = ["LAX", "SFO", "SEA", "LAS", "PDX"];
         
        

        this.handleFlight("flight1", base, citiesvisit[0], 5); // Flight
        this.handleFlight("flight2", citiesvisit[0], base, 7); // Return Flight

        this.handleFlight("flight3", base, citiesvisit[1], 5); // Flight
        this.handleFlight("flight4", citiesvisit[1], base, 6); // Return Flight

        this.handleFlight("flight5", base, citiesvisit[2], 5); // Flight
        this.handleFlight("flight6", citiesvisit[2], base, 6); // Return Flight

        this.handleFlight("flight7", base, citiesvisit[3], 5); // Flight
        this.handleFlight("flight8", citiesvisit[3], base, 6); // Return Flight

        this.handleFlight("flight9", base, citiesvisit[4], 5); // Flight
        this.handleFlight("flight10", citiesvisit[4], base, 6); // Return Flight

        this.handleYelp();
        this.handleMeetup();
    }
    handleFlight = (tto, from,to,day) =>{
        var thethis = this;
        if(this.state.myzipcode!==""){
                             //from/TO/DAYOFTHEWEEK
            // axios.get("/api/flightsthisweek/LAX/SAN/5").then(function (data) {
            axios.get(`/api/flightsthisweek/${from}/${to}/${day}`).then(function (data) {
                console.log(data.data.scheduledFlights);
                thethis.setState({
                    [tto]: data.data.scheduledFlights
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
                <a  href="/home"><img className="stay-logo" alt="logo" src={logo}/></a>
                <h1>Go</h1>
                <SearchZip searchzipcode={this.state.myzipcode} buttonhandle={this.handleAPIS} handleinput={this.handleinput}/>
            <div className="">
            <div className="">
                <div className="">
                {(this.state.flight1[0] && this.state.flight2[0]) ? <FlightCard tflightOne={this.state.flight1} tflightTwo={this.state.flight2} /> : "" }
                </div>

                <div className="">
                {(this.state.flight3[0] && this.state.flight4[0]) ? <FlightCard tflightOne={this.state.flight3} tflightTwo={this.state.flight4} /> : "" }
                </div>

                <div className="">
                {(this.state.flight5[0] && this.state.flight6[0]) ? <FlightCard tflightOne={this.state.flight5} tflightTwo={this.state.flight6} /> : "" }
                </div>

                <div className="">
                {(this.state.flight7[0] && this.state.flight8[0]) ? <FlightCard tflightOne={this.state.flight7} tflightTwo={this.state.flight8} /> : "" } 
                </div>

                <div className="">
                {(this.state.flight9[0] && this.state.flight10[0]) ? <FlightCard tflightOne={this.state.flight9} tflightTwo={this.state.flight10} /> : "" } 
                </div>

            </div>
            </div>
      </Wrapper>
        );
    }
}

export default withAuth(GoTo);

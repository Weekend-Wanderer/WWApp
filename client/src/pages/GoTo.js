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
import {YelpResturantCard} from "../components/YelpResturantCard";
import {MeetupEventCard} from "../components/MeetupEventCard";
import SnapMapGoTo from "../components/SnapMapGoTo";

const Auth = new AuthService();

class GoTo extends Component {

    state = {
        // userId: this.props.user.id,
        myzipcode: "--",
        profileLink: "",
        lat: "",
        lng: "",
        meetup: [],
        yelp: []
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
        this.handleYelp();
        this.handleMeetup();
    }
    handleMeetup = () =>{
        var thethis = this;
        if(this.state.myzipcode!==""){
            axios.post("/api/meetup/" + this.state.myzipcode).then(function (data) {
                console.log(data.data);
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
                console.log(data.data);
                thethis.setState({
                    yelp: data.data
                });
            })
        }
    }
    handleinput = (event) =>{
        var value = event.value;
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
        console.log(this.state.meetup);
        return (
            <Wrapper>
            <h1>GO To!</h1>
                <SearchZip searchzipcode={this.state.myzipcode} buttonhandle={this.handleAPIS} handleinput={this.handleinput}/>
                <div>
                <SnapMapGoTo lat={this.state.lat} lng={this.state.lng}/>
                </div>
                <div>
                <Row>
                    <Col>
                {this.state.yelp.map(ylp=>(<YelpResturantCard title={ylp.name} price={ylp.price} rating={ylp.rating} image_url={ylp.image_url} />))}
                    </Col>
                </Row>
                <Row>
                    <Col>    
                {this.state.meetup.map(meet=>(<MeetupEventCard name={meet.name} local_date={meet.local_date} local_time={meet.local_time} link={meet.link}  group_address={meet.group_address} />))}
                    </Col>
                </Row>    
        
                </div>
            </Wrapper>);
    }
}

export default withAuth(GoTo);

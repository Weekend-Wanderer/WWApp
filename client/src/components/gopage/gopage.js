import React, { Component } from 'react';
import logo from '../../logo.svg';
import './style.css';
// import GoButton from '../homepage/gobutton';
import { Alert, Navbar,FormGroup,FormControl,Button, Well } from 'react-bootstrap';

// import StayButton from '../homepage/staybutton';
import AuthService from '../AuthService';
import withAuth from '../withAuth';
import axios from "axios";
const Auth = new AuthService();

class Home extends Component {

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
    handleLogout = () => {
        Auth.logout();
        this.props.history.replace('/signup');
    };

    goToEditProfile = () => {
        this.props.history.replace(this.state.profileLink);
    };

    render() {
        return (
            <div className="App">
                {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome {this.props.user.email}</h2>
          <p className="App-intro">
          <button type="button" className="btn btn-primary" onClick={this.goToEditProfile}>Go to Profile</button>
          <button type="button" className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
        </p>
        </div> */}
                {/* <StayButton /> */}
                <h1>GO!</h1>

                <Alert bsStyle="warning">
                    <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
                    good.
        </Alert>

                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            My Zipcode:
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search Zipcode" value={this.state.myzipcode} />
                            </FormGroup>{' '}
                            <Button type="submit" onClick={this.handleAPIS}>Search Zipcode</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
                <div>
            <Well bsSize="large">{JSON.stringify(this.state.yelp)}</Well>
            <Well bsSize="large">{JSON.stringify(this.state.meetup)}</Well>
        </div>
      </div>
        );
    }
}

export default withAuth(Home);

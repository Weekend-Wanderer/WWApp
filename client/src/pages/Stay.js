import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import API from '../utils/API';
import withAuth from '../components/withAuth';
import ImageCard from "../components/ImageCard";
import EventCard from "../components/EventCard";

class Stay extends Component {
    state = {
        username: "",
        zipcode: "",
        restaurantsRow1: [],
        restaurantsRow2: [],
        eventsRow1: [],
        eventsRow2: []
    }
    componentDidMount() {
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
            axios.post(`/api/meetup/${b.state.zipcode}`).then(function (data){
                console.log(data);
                const eventsRow1 = [];
                const eventsRow2 = [];
                for (let i = 0; i <= 2; i++) {
                    eventsRow1.push({
                        eventName: data.data[i].name,
                        eventLink: data.data[i].link
                    });
                }
                for (let i = 3; i <= 5; i++) {
                    eventsRow2.push({
                        eventName: data.data[i].name,
                        eventLink: data.data[i].link
                    });
                }

                b.setState({
                    eventsRow1: eventsRow1,
                    eventsRow2: eventsRow2

                });
            })
            
        });
    }
    render() {

        return (
            <div>
                <h1>Hello {this.state.username}, Let's Stay!</h1>
                <div className="container">
                    <h2>Places to Eat:</h2>
                    <div className="row">
                        {this.state.restaurantsRow1.map(restaurant =>
                            <div className="col-md-4">
                                <ImageCard title={restaurant.name} lat={restaurant.coordinates.latitude} lng={restaurant.coordinates.longitude} />
                            </div>
                        )
                    }
                    </div>
                    <div className="row">
                        {this.state.restaurantsRow2.map(restaurant =>
                            <div className="col-md-4">
                                <ImageCard title={restaurant.name} lat={restaurant.coordinates.latitude} lng={restaurant.coordinates.longitude} />
                            </div>
                        )
                    }
                    </div>
                    <h2>Things to Do:</h2>
                    <div className="row">
                        {this.state.eventsRow1.map(event =>
                            <div className="col-md-4">
                                <EventCard title={event.eventName} link={event.eventLink} />
                            </div>
                        )
                    }
                    </div>
                    <div className="row">
                        {this.state.eventsRow2.map(event =>
                            <div className="col-md-4">
                                <EventCard title={event.eventName} link={event.eventLink} />
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
        )
    }
}
export default withAuth(Stay);
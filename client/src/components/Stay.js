import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import API from '../utils/API';
import withAuth from './withAuth';
import ImageCard from "./ImageCard";

class Stay extends Component {
    state = {
        username: "",
        zipcode: "",
        restaurants: []
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
                const restaurants = [];
                for (let i = 0; i <= 5; i++) {
                    restaurants.push(data.data[i]);
                }
                b.setState({
                    restaurants: restaurants
                    
                });


            })
        });
    }
    render() {

        return (
            <div>
                <h1>Hello {this.state.username}, Let's Stay!</h1>
                <div>{this.state.restaurants.map(restaurant =>
                    <ImageCard title={restaurant.name} lat={restaurant.coordinates.latitude} lng={restaurant.coordinates.longitude}/>
                    )

                }
                </div>

            </div>
        )
    }
}
export default withAuth(Stay);
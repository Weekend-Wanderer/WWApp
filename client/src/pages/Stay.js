import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import API from '../utils/API';
import withAuth from '../components/withAuth';
import ImageCard from "../components/ImageCard";

class Stay extends Component {
    state = {
        username: "",
        zipcode: "",
        restaurantsRow1: [],
        restaurantsRow2: [],
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
            
        });
    }
    render() {

        return (
            <div>
                <h1>Hello {this.state.username}, Let's Stay!</h1>
                <div className="container">
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
                </div>
            </div>
        )
    }
}
export default withAuth(Stay);
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Glyphicon,Grid, Col, Row } from 'react-bootstrap';
import AirplaneIco from "./AirplaneIco";

const moment = require("moment");

class FlightCard extends React.Component{
  state  ={ 
    airportdataArrive1: {},
    airportdataDepart1: {},
    airportdataArrive2: {},
    airportdataDepart2: {},
    flightIndex: 1
  }
  componentDidMount() {
    this.handleAirportArrive1(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].arrivalAirportFsCode);
    this.handleAirportDepart1(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].departureAirportFsCode);
    this.handleAirportArrive2(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].arrivalAirportFsCode);
    this.handleAirportDepart2(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].departureAirportFsCode);
  }

handleAirportArrive1 = (code) =>{
    var thethis = this;
    if(this.state.myzipcode!==""){
        axios.get("/api/airportcodetozip/" + code).then(function (data) {
            thethis.setState({
              airportdataArrive1: data.data
            })
        })
    }
}
handleAirportArrive2 = (code) =>{
  var thethis = this;
  if(this.state.myzipcode!==""){
      axios.get("/api/airportcodetozip/" + code).then(function (data) {
          thethis.setState({
            airportdataArrive2: data.data
          })
      })
  }
}

handleAirportDepart1 = (code) =>{
  var thethis = this;
  if(this.state.myzipcode!==""){
      axios.get("/api/airportcodetozip/" + code).then(function (data) {
          thethis.setState({
            airportdataDepart1: data.data
          })
      })
  }
}
handleAirportDepart2 = (code) =>{
  var thethis = this;
  if(this.state.myzipcode!==""){
      axios.get("/api/airportcodetozip/" + code).then(function (data) {
          thethis.setState({
            airportdataDepart2: data.data
          })
      })
  }
}
  render() {
    console.log(this.props);
    let goToRoute = `goto/${this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].departureAirportFsCode}/${this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].departureAirportFsCode}/${this.state.airportdataArrive1.zipcode}`;
    
    return (
      //name={meet.name} local_date={meet.local_date} local_time={meet.local_time} link={meet.link}  group_address={meet.group_address}
    <Link to={goToRoute} >
    <Grid className="card-flight">
    
    <Row>
    <Col xs={12} md={2}>
        <div className="flightDay">{moment(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].departureTime).format("dddd")}</div>
        <div className="flightDayMonth">
        {moment(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].departureTime).format("Do MMMM")}
        </div>
    </Col>  
    <Col xs={12} md={10}>
    <Row>
    <Col xs={12} md={12}>
    {(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].operator) ? this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].operator.carrierFsCode + this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].operator.flightNumber: ""}
    </Col>
    </Row>
    
    <Row className="show-grid" className="flight-fromto">
      <Col xs={12} md={4} className="colorgreen">{this.state.airportdataDepart1.city}</Col>  
      <Col xs={12} md={4}><AirplaneIco classpre="start" /></Col> 
      <Col xs={12} md={4}>{this.state.airportdataArrive1.city}</Col>
    </Row>
    <Row className="flight-times">
      <Col xs={12} md={4}>Departing</Col>  
      <Col xs={12} md={4}>{this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].stops} stops</Col> 
      <Col xs={12} md={4}>Arriving</Col>
    </Row>
    <Row className="biggreen">
      <Col xs={12} md={4}>{moment(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].departureTime).format("hh:mm A")}</Col>  
      <Col xs={12} md={4}>{(moment(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].arrivalTime).diff(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].departureTime, "hour") > 0) ? moment(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].arrivalTime).diff(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].departureTime, "hour") +" hours and " : "" }{moment(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].arrivalTime).diff(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].departureTime, "minute") % 60} minutes flight</Col> 
      <Col xs={12} md={4}>{moment(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].arrivalTime).format("hh:mm A")}</Col>
    </Row>
    
    </Col>
    </Row>
     
     
     
<Row>
<Col xs={12} md={2}>
    <div className="flightDay">{moment(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].departureTime).format("dddd")}</div>
    <div className="flightDayMonth">
    {moment(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].departureTime).format("Do MMMM")}
    </div>
</Col>  
<Col xs={12} md={10}>
<Row>
<Col xs={12} md={12}>
{(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].operator) ? this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].operator.carrierFsCode + this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].operator.flightNumber: ""}
</Col>
</Row>

<Row className="show-grid" className="flight-fromto">
  <Col xs={12} md={4}>{this.state.airportdataDepart2.city}</Col>  
  <Col xs={12} md={4}><AirplaneIco classpre="end"/></Col> 
  <Col xs={12} md={4} className="colorgreen" >{this.state.airportdataArrive2.city}</Col>
</Row>
<Row className="flight-times">
  <Col xs={12} md={4}>Departing</Col>  
  <Col xs={12} md={4}>{this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].stops} stops</Col> 
  <Col xs={12} md={4}>Arriving</Col>
</Row>
<Row className="biggreen">
  <Col xs={12} md={4}>{moment(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].departureTime).format("hh:mm A")}</Col>  
  <Col xs={12} md={4}>{(moment(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].arrivalTime).diff(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].departureTime, "hour") > 0) ? moment(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].arrivalTime).diff(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].departureTime, "hour") +" hours and " : "" }{moment(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].arrivalTime).diff(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].departureTime, "minute") % 60} minutes flight</Col> 
  <Col xs={12} md={4}>{moment(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].arrivalTime).format("hh:mm A")}</Col>
</Row>

</Col>


<Col xs={12} md={0} className="planeGoButton">GO!</Col>
<Col xs={12} md={0} className="tripInfo">{(moment(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].arrivalTime).diff(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].departureTime, "hour") > 0) ? moment(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].arrivalTime).diff(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].departureTime, "hour") +" hours and " : "" }{moment(this.props.tflightTwo[Math.round(this.props.tflightTwo.length/1.5)].arrivalTime).diff(this.props.tflightOne[Math.round(this.props.tflightOne.length-1)].departureTime, "minute") % 60} minutes wandering!</Col>

</Row>
     
     
     
     </Grid>
    </Link>
  );
  };
}

export  {FlightCard};

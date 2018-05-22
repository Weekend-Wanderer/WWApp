import React from "react";
import "./EventCard.css";

const EventCard = props => {
  return (
  <div className="card card-image">
    <div className="img-container">
      <p className="card-title card-event">{props.name}</p>
      <p className="card-body"><a href={props.link}>{props.link}</a></p>
    </div>
  </div>
);
}

export default EventCard;

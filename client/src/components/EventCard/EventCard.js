import React from "react";
import "./EventCard.css";

const EventCard = props => {
  let snapMap = `https://map.snapchat.com/embed/@${props.lat},${props.lng},12.63z`
  return (
    <div className="card card-image">
      <div className="img-container">
        <iframe title="snapMap" src={snapMap} width="100%" height="65%" frameBorder="0"></iframe>
        <h2 className="card-title card-title-snap"><a href={props.link} target="#">{props.name}</a></h2>
        <div className="card-body">
        </div>
      </div>
    </div>
  );
}

export default EventCard;

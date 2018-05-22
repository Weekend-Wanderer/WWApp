import React from "react";
import "./style.css";

const MeetupEventCard = props => {
  return (
    //name={meet.name} local_date={meet.local_date} local_time={meet.local_time} link={meet.link}  group_address={meet.group_address}
  <div className="card-meetup">
    <div>
      <p className="meetup-title">{props.name}</p>
      <p className="meetup-local_date">{props.local_date}</p>
      <p className="meetup-local_time">{props.local_time}</p>
      <p className="meetup-link">{props.link}</p>
      <p className="meetup-group_address">{props.group_address}</p>
    </div>
    
  </div>
);
}

export  {MeetupEventCard};

import React from "react";
import "./style.css";

const YelpResturantCard = props => {
  return (
    //title={ylp.name} price={ylp.price} rating={ylp.rating} image_url={ylp.image_url
  <div className="card card-image">
    <div className="img-container">
      <img src={props.image_url} className="img-container" />
      <p className="card-title">{props.title}</p>
    </div>
    
  </div>
);
}

export  {YelpResturantCard};

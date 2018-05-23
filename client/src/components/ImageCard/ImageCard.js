import React from "react";
import "./ImageCard.css";

const ImageCard = props => {
  let snapMap = `https://map.snapchat.com/embed/@${props.lat},${props.lng},12.63z`
  return (
  <div className="card card-image">
    <div className="img-container">
      <h2 className="card-title card-title-snap"><a href={props.link}>{props.title}</a></h2>
      <iframe title="snapMap" src={snapMap} width="100%" height="65%" frameBorder="0"></iframe>
    </div>
  </div>
);
}

export default ImageCard;

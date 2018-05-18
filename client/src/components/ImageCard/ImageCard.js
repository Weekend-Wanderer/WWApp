import React from "react";
import "./ImageCard.css";

const ImageCard = props => {
  let snapMap = `https://map.snapchat.com/embed/@${props.lat},${props.lng},14.63z`
  return (
  <div className="card card-image">
    <div className="img-container">
      <p className="card-title">{props.title}</p>
    
      <iframe src={snapMap} width="100%" height="50%" frameborder="0"></iframe>
    </div>
  </div>
);
}

export default ImageCard;

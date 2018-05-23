import React,{ Component } from "react";
import "./ImageCard.css";

class SnapMapGoTo extends Component  {
  state = {
    random: 0,
    lat: "",
    lng: ""
}
componentDidMount() {
  this.resetIframe();
  var tthis = this;
  this.setState({
    lat: tthis.props.lat,
    lng: tthis.props.lng
  })
}

  resetIframe() {
    this.setState({random: this.state.random + 1});
}
  render() {
    var snapMap = `https://map.snapchat.com/embed/@${this.props.lat},${this.props.lng},8.63z`
      return (
      <div><p>{this.props.lat}, {this.props.lng}</p>
      <div className="card-image-snap">
      <iframe key={this.state.random} title="snapMap" src={snapMap} width="100%" height="80%" frameborder="0"></iframe>
      </div></div>
    );
 }
}

export default SnapMapGoTo;

import React from "react";


const AirplaneIco = (props) => {
    let cname1 = "arrow-div-" + props.classpre;
    let cname2 = "airplane-ico-" + props.classpre;

    return(
        <div><div className={cname1}></div><span className={cname2}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.18 9"></path><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"></path></svg></span></div>
    );
}

export default AirplaneIco;
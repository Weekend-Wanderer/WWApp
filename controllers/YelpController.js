const yelp = require('yelp-fusion');
const client = yelp.client("D8cX5oZx77c-eDtSQ3azibBQ-9Hxja6-AGJasBnodqgJfJ5sHAaUBzZWoKp1epqANaWwopf9l_Er0D6IaRTZruXgcUZwFRER47NAObo6KEC2j-xLk0I8M5QTUUPhWnYx");


module.exports = function (event, zip, cb) {
    console.log(event)
    client.search({
        term: event,
        location: zip,
        field: "radius",
        instance: "25 miles"
    }).then(response => {
        // console.log(response.jsonBody.businesses);
        cb(response.jsonBody.businesses)
    }).catch(e => {
        console.log(e);
    });
}


const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API_KEY);


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


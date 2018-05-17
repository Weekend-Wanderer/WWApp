const yelp = require('yelp-fusion');
const client = yelp.client("D8cX5oZx77c-eDtSQ3azibBQ-9Hxja6-AGJasBnodqgJfJ5sHAaUBzZWoKp1epqANaWwopf9l_Er0D6IaRTZruXgcUZwFRER47NAObo6KEC2j-xLk0I8M5QTUUPhWnYx");
const express = require("express");
const router = express.Router();

router.post("/api/yelp/:zip", function (req, res) {
    console.log(req.body.event)
    client.search({
        term: req.body.event,
        location: req.params.zip,
        field: "radius",
        instance: "25 miles"
    }).then(response => {
        // console.log(response.jsonBody.businesses);
        res.json(response.jsonBody.businesses)
    }).catch(e => {
        console.log(e);
    });
})
module.exports = router;
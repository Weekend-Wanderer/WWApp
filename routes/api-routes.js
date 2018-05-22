const YelpController = require("../controllers/YelpController");
const ZipController = require("../controllers/ZipController");
const FlightController = require("../controllers/FlightController");
const router = require('express').Router();
const meetup = require("../controllers/MeetupController");

router.post("/api/yelp/:zip", function (req, res) {
    const event = req.body.event;
    const zipcode = req.params.zip;
    YelpController(event, zipcode, function (data) {
        res.json(data);
    });

})

router.get("/api/zipconverter/:zip", function (req, res) {
    const zipcode = req.params.zip;
    ZipController(zipcode, function (data) {
        res.json(data);
    });
})

router.get("/api/flights/:arriving/:departing", function(req,res){
    FlightController.getFlights(req.params.arriving, req.params.departing, function(data){
      res.json(data);
    })
  });

router.post("/api/meetup/:zip", function (req, res) {
    const zipcode = req.params.zip;
    //get lat lng:
    ZipController(zipcode, function (longlat){
        meetup.getMeetupData(process.env.MEETUP_API_KEY, 10,"hiking", "25",longlat[zipcode].lng,longlat[zipcode].lat,function(data){
            res.json(data);
            //changes
        });
    });
    

})

module.exports = router;
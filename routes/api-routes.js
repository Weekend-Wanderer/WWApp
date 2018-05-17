const YelpController = require("../controllers/YelpController");
const ZipController = require("../controllers/ZipController");
const router = require('express').Router();

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

module.exports = router;
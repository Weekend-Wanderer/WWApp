const axios = require("axios");


module.exports = function (zip, cb) {
    const ZIPCODEAPI = process.env.ZIPCODE_API_KEY;

    axios.get(`http://www.zipcodeapi.com/rest/${ZIPCODEAPI}/multi-info.json/${zip}/degrees`).then(function (data) {
        const b = data.data;
        cb(b);

    });
}
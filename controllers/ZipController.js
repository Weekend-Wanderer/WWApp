const axios = require("axios");


module.exports = function (zip, cb) {
    const ZIPCODEAPI = "8PKYlTgtwIAUgkLduEsxGLurXX1iPSw5snpMOQ0GWbhIG4S5f8m9Je7cqWj9SLsR";

    axios.get(`http://www.zipcodeapi.com/rest/${ZIPCODEAPI}/multi-info.json/${zip}/degrees`).then(function (data) {
        const b = data.data;
        cb(b);

    });
}
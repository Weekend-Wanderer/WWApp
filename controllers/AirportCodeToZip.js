const axios = require("axios");
const airportDb = require("../db/airportcodes.json");
//loading data from json file
module.exports = function (code, cb) {
    for(var i =0; i<airportDb.length; i++){
        var acode = airportDb[i].code;
        if(acode === code){
            cb(airportDb[i]);
        }
    }
    
}
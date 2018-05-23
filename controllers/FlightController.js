// const flight = "https://api.flightstats.com/flex/schedules/rest/v1/json/flight/AA/100/departing/2018/5/17?appId=2e9f74b0&appKey=e71111afc6e58c6cb5d7888225da6032"
const axios = require("axios");
const moment = require("moment");


var flightController = {
    getFlights: function(departing, arriving, callback){
        var ymd1 = moment().format("YYYY/M/D"); // today
        const url = `https://api.flightstats.com/flex/schedules/rest/v1/json/from/${departing}/to/${arriving}/arriving/${ymd1}?appId=`+ process.env.FLIGHT_API_KEY +`&appKey=`+process.env.Flight_API_appKey;
        console.log(url);
        //curl -v  -X GET "https://api.flightstats.com/flex/schedules/rest/v1/json/from/ABQ/to/DFW/departing/2018/5/25?appId=2e9f74b0&appKey=e71111afc6e58c6cb5d7888225da6032"
        axios.get(url).then(res => callback(res.data));
    },
    getFlightsByThisWeekend: function(day, departing, arriving, callback){
        // var ymd1 = moment().isoWeekday(6).format("YYYY/M/D"); // saturday
        var dayW = parseInt(day);
        var ymd1 = moment().isoWeekday(dayW).format("YYYY/M/D"); // 

        // var ymd2 = moment().isoWeekday(7).format("YYYY/M/D"); // sunday
        const url = `https://api.flightstats.com/flex/schedules/rest/v1/json/from/${departing}/to/${arriving}/arriving/${ymd1}?appId=`+ process.env.FLIGHT_API_KEY +`&appKey=`+process.env.Flight_API_appKey;
        console.log(url);
        axios.get(url).then(res => callback(res.data));
    
    }

}
module.exports = flightController;

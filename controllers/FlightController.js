// const flight = "https://api.flightstats.com/flex/schedules/rest/v1/json/flight/AA/100/departing/2018/5/17?appId=2e9f74b0&appKey=e71111afc6e58c6cb5d7888225da6032"
const axios = require("axios");
var flightController = {
    getFlights: function(departing, arriving, callback){
        const url = `https://api.flightstats.com/flex/schedules/rest/v1/json/from/${departing}/to/${arriving}/arriving/2018/5/17?appId=2e9f74b0&appKey=e71111afc6e58c6cb5d7888225da6032`;
        axios.get(url).then(res => callback(res.data));
    }
}
module.exports = flightController;

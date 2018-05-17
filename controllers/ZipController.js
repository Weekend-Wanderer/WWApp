const express = require("express");
const router = express.Router();


axios.get("/api/zipconverter/:zip", function (req, res){
    const ZIPCODEAPI = "8PKYlTgtwIAUgkLduEsxGLurXX1iPSw5snpMOQ0GWbhIG4S5f8m9Je7cqWj9SLsR";
    const zipcode = req.params.zip;
    
    axios.get(`http://www.zipcodeapi.com/rest/${ZIPCODEAPI}/multi-info.json/${zipcode}/degrees`).then(function (data) {
      const b = data.data;
      res.json(b);
    
    });
  })
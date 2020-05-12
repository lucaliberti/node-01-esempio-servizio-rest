  


  
//-----------------------------------
// SETUP
//-----------------------------------
// npm install



//-----------------------------------
// VARs
//-----------------------------------


  var express = require('express');
  var app = express();
   

//-----------------------------------
// SETUPs
//-----------------------------------
  
  //var bodyParser = require('body-parser'); // per gestire le richieste POST:
  //app.use(bodyParser.json());              // support json encoded bodies
  //app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
  




//-----------------------------------
// FUNCs
//-----------------------------------



  function getDateTime_json() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;


    var date_json=`{ "year":  "${year}",
                      "month": "${month}",
                      "day":   "${day}",
                      "hour":  "${hour}",
                      "min":   "${min}",
                      "sec":   "${sec}"
                   }`;

    return date_json;

  }


//-----------------------------------
// MIDDLEWARE
//-----------------------------------
  app.get('/', function (req, res) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(getDateTime_json());
      //res.send(getDateTime_json());
  });
  

  app.listen(3000, function () {
      console.log('App listening on port 3000!');
  });






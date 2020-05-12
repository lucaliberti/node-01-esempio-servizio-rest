  
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
    var obj=new Object();

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


    obj.year=year;
    obj.month=month;
    obj.day=day;
    obj.hour=hour;
    obj.min=min;
    obj.sec=sec;

    return obj;

  }


//-----------------------------------
// MIDDLEWARE
//-----------------------------------
  app.get('/', function (req, res) {
      var obj_currentDate=getDateTime_json();
      console.log(obj_currentDate);
      res.setHeader('Content-Type', 'application/json');
      res.status(200)
      res.send( JSON.stringify(obj_currentDate) );
  });
  

//-----------------------------------
// MAIN
//-----------------------------------
  app.listen(3000, function () {
      console.log('App listening on port 3000!');
  });


/*


curl -vk http://localhost:3000
* Rebuilt URL to: http://localhost:8081/
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 8081 (#0)
> GET / HTTP/1.1
> Host: localhost:8081
> User-Agent: curl/7.58.0
> Accept: *\/*
>
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 233
< ETag: W/"e9-gEHwqSiPiSGIl2bY7k6ArB7USPI"
< Date: Sun, 17 Mar 2019 00:40:13 GMT
< Connection: keep-alive
<
{
                      "year:"  2019,
                      "month:" 03,
                      "day:"   17,
                      "hour:"  01,
                      "min:"   40,
                      "sec:"   13

*/




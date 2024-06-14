// import http from 'http';//in ES6
const http = require("http"); //in commonJS
const fs = require("fs");
const port = 9001;
const fileName = "durgesh.txt";
http
  .createServer(function (req, res) {
    console.log("req.url", req.url);
    if (req.url == "/") {
      fs.writeFile(
        `./${fileName}`,
        " hello all ! How are you ? Ans:- we are good.",
        function (err, data) {
          if (err) {
            res.end(`error in writeFile ${err}`);
          } else {
            res.end("Successfully wrote");
          }
        }
      );
    } else if (req.url == "/home") {
      res.end("You are on home page");
    } else if (req.url == "/about") {
      res.end("You are on about page");
    } else if (req.url == "/contact") {
      res.end("You are on contact page");
    } else {
      res.end("page not found !");
    }
  })
  .listen(port, function () {
    console.log(`server listening on the port http://localhost:${port}`);
  });

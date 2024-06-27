// import http from 'http';//in ES6
const http = require("http"); //in commonJS
const fs = require("fs");
const port = 9001;
const fileName = "durgesh.txt";
http
  .createServer(function (req, res) {
    fs.unlink(`./${fileName}`, function (err, data) {
      if (err) {
        res.end(`error in unlink (removed) file ${err}`);
      } else {
        res.end(`Successfully removed file ${fileName}`);
      }
    });
  })
  .listen(port, function () {
    console.log(`server listening on the port http://localhost:${port}`);
  });

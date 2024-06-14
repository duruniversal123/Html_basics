// import http from 'http';//in ES6
const http = require("http"); //in commonJS
const fs = require("fs");
const port = 9001;
const fileName = "function.js";
const dirName = "topics";
http
  .createServer(function (req, res) {
    fs.readdir(`./${dirName}`, function (err, files) {
      if (err) {
        res.end(`error in reading directory ${dirName}`);
      } else {
        console.log(files);
        // return;
       for(let i in files) {
        fs.unlink(`./${dirName}/${files[i]}`, function (err, data) {
            if (err) {
              res.end(`error in unlink (removed) file ${err}`);
            } else {
              fs.rmdir(`./${dirName}`, function (err, data) {
                if (err) {
                  res.end(`error in rmdirectory ${err}`);
                } else {
                  res.end("Successfully directory removed");
                }
              });
            }
          });
       }
      }
    });
  })
  .listen(port, function () {
    console.log(`server listening on the port http://localhost:${port}`);
  });

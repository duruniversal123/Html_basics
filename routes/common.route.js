const express = require("express");

const Router = express.Router();

const message = require("../constant/message");

// const student = require("../controllers/student.controller");

Router.post("/api/login", function (req, res) {
  console.log("req data", req);
  console.log("req body data", req.body);
  const { username, password } = req.body;
  if (username && password) {
    res.send({
      message: message.success.loginMessage,
      status: 1,
      data: { username, password },
    });
  } else {
    res.send({ message: message.error.loginMessage, status: 0 });
  }
  //json data response
});


Router.post("/api/register", function (req, res) {
    console.log("req data", req);
    console.log("req body data", req.body);
    const { firstname, lastname, username, password } = req.body;
    if (firstname && lastname && username && password) {
      res.send({
        message: message.success.registerMessage,
        status: 1,
        data: { firstname, lastname, username, password },
      });
    } else {
      res.send({ message: message.error.registerMessage, status: 1 });
    }
    //json data response
  });
module.exports = Router;

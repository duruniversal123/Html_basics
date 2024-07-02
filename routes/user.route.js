const express = require("express");
const userController = require("../controllers/user.controller");
const Router = express.Router();

Router.get("/", function (req, res) {
    res.send({
      message: "welcome to the user root",
      status: 1,
    }); //json data response
  });
Router.get("/api/get-users",userController.getUsers);

Router.get("/api/user/:id",userController.getUserById);

Router.get("/api/user/delete/:id",userController.userDelete);

Router.post("/api/reset-password",userController.resetPassword);

Router.post("/api/emailsend",userController.userEmailSend);

module.exports = Router;

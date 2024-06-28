const express = require("express");
const bodyParser = require("body-parser"); //parse the req.body.parameter or parse the incoming request
const message = require("./constant/message");
console.log("message object data", message);

const studentRouter = require("./routes/student.route");
const commonRouter=require("./routes/common.route");
const port = 9000;
const app = express();

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Dhoni" },
  { id: 3, name: "Akshay" },
  { id: 4, name: "Priyanka" },
  { id: 5, name: "Rohit" },
  { id: 6, name: "Sachin" },
];

// parse incoming body data in the form of application/json
app.use(bodyParser.json());

//coomon router endpoint
app.use("/",commonRouter);

//student router endpoint
app.use("/student",studentRouter);



//get users data request
app.get("/api/users", function (req, res) {
  res.send({
    message: "all users data fetched successfully",
    status: 1,
    users: users,
  }); //json data response
});

//get specific user details by id
app.get("/api/user/:id", function (req, res) {
  console.log("req.params.id", req.params.id);
  const user = users.filter((data) => {
    return data.id == req.params.id;
  });
  if (user.length > 0) {
    res.send({
      message: "specific user fetched successfully",
      status: 1,
      user: user,
    });
  } else {
    res.send({ message: `user not found with id ${req.params.id}`, status: 0 });
  }
});

//delete specific user details by id
app.get("/api/user/delete/:id", function (req, res) {
  console.log("req.params.id", req.params.id);
  let isFind = false; //false
  for (var i in users) {
    if (req.params.id == users[i].id) {
      isFind = true;
      break;
    }
  }
  if (isFind) {
    const user = users.filter((data) => {
      return data.id != req.params.id;
    });
    if (user.length > 0) {
      res.send({
        message: "delete specific user successfully",
        status: 1,
        user: user,
      });
    }
  } else {
    res.send({ message: `user not found with id ${req.params.id}`, status: 0 });
  }
});



//import emailSend
const emailSend = require("./helper/email-send");
//nodemailer use
app.get("/api/emailsend", async function (req, res) {
  const message = await emailSend("12365ak@gmail.com","","welcome");
  if (message) {
    res.send({ message: "message sent in your email address", status: 1 });
  }
});

const otpGenerator = require('otp-generator')

//reset-password
app.get("/api/reset-password", async function (req, res) {
  const email = "12365ak@gmail.com";
  const otp=otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets: false });
  console.log("otp",otp);
  const message = await emailSend(email, otp,"reset");
  if (message) {
    res.send({ message: "otp sent in your email address,please check", status: 1 });
  }

})

app.listen(port, function () {
  console.log(`listening on port http://localhost:${port}`);
});

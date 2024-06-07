const students = require("./students");
const teachers = [
  { id: 1, name: "Dhoni", suject: "Maths" },
  { id: 2, name: "Rohit", suject: "Physics" },
  { id: 3, name: "Akshay", suject: "Economics" },
  //   { id: 4, name: "Priya", suject: "Environment" },
];

console.log("students data in teachers module", students);
module.exports = teachers;

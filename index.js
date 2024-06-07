const students=require("./students.js");
const teachers=require("./teachers.js");


const filterData=students.filter((student)=>student.id==1)
console.log("student data in index.js is =  ", students);
console.log("teachers data in index.js is =  ", teachers);
console.log("filterData by student id",filterData);

// import http from 'http';//in ES6
const http= require('http');//in commonJS
const port =9001;
http.createServer(function(req,res){
    var name="Durgesh Prajapat";
     res.end(`Hello ${name}!`);
}).listen(port,function(){
    console.log(`server listening on the port http://localhost:${port}`);
});
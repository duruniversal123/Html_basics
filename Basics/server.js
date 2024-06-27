// import http from 'http';//in ES6
const http= require('http');//in commonJS
const fs=require('fs');
const port =9001;
const fileName="durgesh.txt";
http.createServer(function(req,res){
   fs.writeFile(`./${fileName}`," hello all ! How are you ? Ans:- we are good." ,function(err,data){
    if(err){
        res.end(`error in writeFile ${err}`);
    }
    else{
        res.end("Successfully wrote");
    }
   });
}).listen(port,function(){
    console.log(`server listening on the port http://localhost:${port}`);
});
// import http from 'http';//in ES6
const http= require('http');//in commonJS
const fs=require('fs');
const port =9001;
const fileName="durgesh.txt";
http.createServer(function(req,res){
   fs.appendFile(`./${fileName}`,"\n We are from vijaynagar,Indore ,(M.P.)" ,function(err,data){
    if(err){
        res.end(`error in append data ${err}`);
    }
    else{
        res.end("Successfully append data");
    }
   });
}).listen(port,function(){
    console.log(`server listening on the port http://localhost:${port}`);
});
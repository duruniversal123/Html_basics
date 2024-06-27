// import http from 'http';//in ES6
const http= require('http');//in commonJS
const fs=require('fs');//file-system
const port =9001;
const fileName="durgesh.tx";
http.createServer(function(req,res){
   fs.readFile(`./${fileName}`,function(err,data){
    if(err){
        res.end(`error in readfile ${err}`);
    }
    else{
        res.end(`Successfully read the data is ${data} from ${fileName}`);
    }
   });
}).listen(port,function(){
    console.log(`server listening on the port http://localhost:${port}`);
});
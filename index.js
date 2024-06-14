const express=require('express');
const port=9000;
const app=express();

//get request
app.get('/',function(req,res){
    res.send("hello all How are you?");
});

app.listen(port,function(){
    console.log(`listening on port http://localhost:${port}`);
});
const express = require('express');
const ap=express();
ap.get("/",function(req,res){
    res.send("Hello from Express");
    res.end();
});
ap.get("/about",function(req,res){
    res.send("Hello from Express from about page");
    res.end();
});
ap.listen(4000,function(){
    console.log('go to port no 4000');
});
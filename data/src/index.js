 const path = require('path');  //require package path
const express = require('express');
const ap = express();

//console.log(__dirname);  //this is the wrapper function or it check or give the path of the directory or absolute path

//console.log(path.join(__dirname,"../public"));

const staticPath = path.join(__dirname,"../public");


ap.get("/login",function(req,res){
    res.send("Hello from Express from login page");
    res.end();
});
//built in middleware
ap.use(express.static(staticPath));
 ap.listen(5000, function(){
    console.log("go to port number 5000");
});
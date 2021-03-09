const fs = require("fs");

const express = require("express");


// create a instance of express
const app  = express();


function readAndServe(path, type,res)
{
    try
    {
        const data = fs.readFileSync(path);
        
        res.setHeader('Content-Type', type);

        res.end(data);
    }
    catch(err)
    {

    }


}




// handling home route
app.get("/", function(req, res)
{
    readAndServe("./todo.html", "text/html", res)
});





// handling script.js route
app.get("/todo.js", function(req, res)
{
    readAndServe("./todo.js", "text/javascript", res)
    
});




app.listen(3000, function()
{
    console.log("app is live")
})



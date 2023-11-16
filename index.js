const express = require("express")
var app = express()
app.get("/",function(request,response){
response.send("Hello World! This is So Simple Node App")
})
app.listen(3000, function () {
console.log("Started application on port %d", 3000)
});
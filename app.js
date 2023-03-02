// app.js
const express=require("express"); 
const ejs=require("ejs");
const bodyParser=require("body-parser");
const app= express();
const fs = require('fs');
const PORT = process.env.PORT || 4000;

//setting the view engine as EJS. 
app.set('view engine', 'ejs');

//roots the views directory to public
app.set('views', 'public');

//tells express that the public folder is the static folder
app.use(express.static("public"));

//home route
app.get("/", function(req,res){
  res.render("./index");
});

app.listen(PORT, function(){
        console.log(`working at localhost: ${ PORT }`);
})
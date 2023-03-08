// app.js
const fns = require('./fns');

const express = require("express");
const app = express();
const ejs = require("ejs");
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const fs = require('fs');

app.use(express.json());

// parse application/json
app.use(bodyParser.json())

// let fileNum = 0;
// let bucketContents = fns.s3.listObjects(params, function(err, bucketContents) {
//   if (err) console.log(err, err.stack); // an error occurred
// });

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

app.get("/tournaments", async (req, res) => {
    try {
        const tournaments = await fns.getAllTournaments();
        res.json(tournaments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

// bucketContents = fns.s3.listObjects(params, function(err, bucketContents) {
//   if (err) console.log(err, err.stack);
//   else fileNum = bucketContents.Contents.length;
// });

// это навороченная реакция на функцию save() от клиента
// сначала мы смотрим, сколько турниров в нашем хранилище
// а потом добавляем туда отправленный с клиента джсон
app.post("/save", function (req, res) {
  let file = JSON.stringify(req.body);
  fns.putOrUpdateTournament(req.body, 1);
});


app.listen(PORT, function(){
  console.log(`working at port: ${ PORT }`);
})

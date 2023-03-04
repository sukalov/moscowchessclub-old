// app.js

const util = require('util');
require('dotenv').config();
const express = require("express");
const app = express();
const ejs = require("ejs");
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const fs = require('fs');
const AWS = require("aws-sdk");
const params = {Bucket: 'moscowchessclub', Delimiter: '/', Prefix: 'tournaments/'};
require("aws-sdk/lib/maintenance_mode_message").suppress = true;
const s3 = new AWS.S3({
    credentials:{
        accessKeyId: process.env.MCC_AWS_KEY,
        secretAccessKey: process.env.MCC_AWS_SECRET_KEY,
        region: 'eu-west-3'
    }
});
const s3cc = new AWS.S3({
  credentials:{
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      region: 'eu-west-3'
  }
});

const listObjectsAsync = util.promisify(s3.listObjects).bind(s3);

// parse application/json
app.use(bodyParser.json())
let fileNum = 0;
let bucketContents = s3.listObjects(params, function(err, bucketContents) {
  if (err) console.log(err, err.stack); // an error occurred
});

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


bucketContents = s3.listObjects(params, function(err, bucketContents) {
  if (err) console.log(err, err.stack);
  else fileNum = bucketContents.Contents.length;
});

app.use(express.json());

// это навороченная реакция на функцию save() от клиента
// сначала мы смотрим, сколько турниров в нашем хранилище
// а потом добавляем туда отправленный с клиента джсон
app.post("/add", function (req, res) {
  let file = JSON.stringify(req.body);
  
  (async () => {
    try {
      const bucketContents = await listObjectsAsync(params);
      fileNum = bucketContents.Contents.length - 1;
      console.log(`${fileNum} tournaments found in the bucket. tournament${ fileNum + 1} added`);
      await s3.putObject({
        Body: file,
        Bucket: "moscowchessclub/tournaments",
        Key: `tournament${ fileNum + 1}.json`
      }).promise();
      res.json({message: 'вроде всё записалось'}['message']);
    } catch (err) {
      console.log(err, err.stack);
    }
  })();
});

app.listen(PORT, function(){
  console.log(`working at port: ${ PORT }`);
})
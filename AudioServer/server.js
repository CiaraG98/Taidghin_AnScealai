const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const https = require("https");
const request = require("request");
const path = require("path");

var app = express();
const port = process.env.PORT || 4001;
app.listen(port, () => console.log("listening at " + port));
app.use(cors());
app.use(bodyParser.json());

const file = fs.createWriteStream("audio.mp3");
const filePath = "/mp3/...";

app.get('/getAudio/:audio', function(req, res){
  //console.log("getAudio");
  let url = req.params.audio;
  console.log("Requested Audio: " + url);
  https.get('https://www.abair.tcd.ie/api/?input=' + url + '&format=mp3&synth=ga_MU_nnc_nnmnkwii', "format=mp3", (resp) => {
    resp.pipe(file);
    res.download("../src/assets/mp3", file.path, function(err){
      if(err){
        console.log(err);
      }
    });
    //console.log(file);
    res.send(file.path);
    console.log("Done");
  }).on("error", (err) => {
    console.log(err);
  });
});

/*
let data = "";
resp.on('data', (chunk) => {
  data += chunk;
});
resp.on("error", (error) => {
  console.log(error.message);
});
resp.on('end', () => {
  //console.log(data);
});
*/

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const https = require("https");

var app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listening at " + port));
app.use(cors());
app.use(bodyParser.json());

const file = fs.createWriteStream("../file.mp3");

app.get('/getAudio/:audio', function(req, res){
  console.log("getAudio");
  let url = req.params.audio;
  console.log(url);
  https.get('https://www.abair.tcd.ie/api/?input=' + url + '&format=mp3&synth=ga_MU_nnc_nnmnkwii', (resp) => {
    resp.pipe(file);
    let data = "";
    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      res.send(data);
    });

  }).on("error", (err) => {
    console.log("Error");
    err.reject(new Error('Error'));
  });
});

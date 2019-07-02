const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const https = require("https");
const request = require("request");

var app = express();
const port = process.env.PORT || 4001;
app.listen(port, () => console.log("listening at " + port));
app.use(cors());
app.use(bodyParser.json());

//const file = fs.createWriteStream("mp3/file.mp3");

app.get('/getAudio/:audio', function(req, res){
  console.log("getAudio");
  let url = req.params.audio;
  console.log(url);
  https.get('https://www.abair.tcd.ie/api/?input=' + url + '&format=mp3&synth=ga_MU_nnc_nnmnkwii', (resp) => {
    //resp.pipe(file);
    let data = "";
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on("error", (error) => {
      console.log(error.message);
    });
    resp.on('end', () => {
      res.send(data);
      //console.log(data);
    });
  }).on("error", (err) => {
    console.log(err);
  });
});

app.get('/appendAudio/:audio', function(req, res){
  let aud = req.params.audio;
  console.log(aud);
});
/*request('https://www.abair.tcd.ie/api/?input=' + url + '&format=mp3&synth=ga_MU_nnc_nnmnkwii', { json: true }, (err, res, body) => {
  if(err) { return console.log(err); }
  //console.log(res);
}).pipe(fs.createWriteStream("mp3.file1.mp3"));
console.log("Done");*/

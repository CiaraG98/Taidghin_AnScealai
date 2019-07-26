const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const https = require("https");
const path = require("path");

var app = express();
const port = process.env.PORT || 4001;
app.listen(port, () => console.log("listening at " + port));
app.use(cors());
app.use(bodyParser.json());
//const file = fs.createWriteStream("audio.mp3");
//const filePath = "/mp3/...";

/*http.createServer(function(req, res){}).listen(4000);*/
var toSend = [];
app.get('/getAudio/:audio', function(req, res){
  var messageObj = {message: "", url: ""};
  let url = req.params.audio;
  messageObj.message = url;
  console.log(url);
  https.get('https://www.abair.tcd.ie/api/?input=' + url + '&format=mp3&synth=ga_MU_nnc_nnmnkwii', (resp) => {
    resp.on("error", function(err){
      console.log(err);
    });
    var thisUrl = "https://www.abair.tcd.ie" + resp.req.path;
    messageObj.url = thisUrl;
    toSend.push(thisUrl);
    console.log(toSend);
    res.send(toSend);
  });
});

app.post('/clearToSend', function(req, res){
  toSend = [];
  console.log(toSend);
  res.send("toSendCleared");
});

/*

ga_MU_nnc_nnmnkwii
ga_MU_cmg_nnmnkwii
ga_CO_pmg_nnmnkwii


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

let data = "";
resp.on('data', (chunk) => {
  data += chunk;
});
resp.on("error", (error) => {
  console.log(error.message);
});
resp.on('end', () => {
  console.log(data);
});

fs.readFile(__dirname + 'https://www.abair.tcd.ie/api/?input=' + url + '&format=mp3&synth=ga_MU_nnc_nnmnkwii', function(err, data){
  if(err){
    res.writeHead(404);
    res.end(JSON.stringify(err));
    return;
  }
  res.writeHead(200);
  res.end(data);
});
*/

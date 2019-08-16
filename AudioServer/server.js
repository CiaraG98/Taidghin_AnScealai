const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const https = require("https");
const path = require("path");
const querystring = require('querystring');
const request = require('request');
const { parse, stringify } = require('node-html-parser');

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
    toSend.push(messageObj);
    console.log(toSend);
    res.send(toSend);
  });
});

app.post('/testGetAudio/:audio', function(req, res){
  var text = req.params.audio;
  if(text){
    var form = {
      Input: text,
      Locale: "ga_CM",
      Format: 'html',
      Speed: '1',
    };

    var formData = querystring.stringify(form);
    var contentLength = formData.lenght;

    request({
      headers: {
        'Host' : 'www.abair.tcd.ie',
        'Content-Length': contentLength,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      uri: 'https://www.abair.tcd.ie/webreader/synthesis',
      body: formData,
      method: 'POST'
    }, function(err, resp, body){
      if(err) res.send(err);
      if(body){
        let audioContainer = parse(body.toString()).querySelectorAll('.audio_paragraph');
        let paragraphs = [];
        let urls = [];
        for(let p of audioContainer) {
            let sentences = [];
            for(let s of p.childNodes) {
                if(s.tagName === 'span') {
                    sentences.push(s.toString());
                } else if(s.tagName === 'audio') {
                    urls.push(s.id);
                }
            }
            paragraphs.push(sentences);
        }
        console.log("Success!");
        res.json({ html : paragraphs, audio : urls });
      } else {
        console.log("Fail");
        res.json({status: '404', message: 'No response from synthesiser'});
      }
    });
  } else {
    res.json({status: '404', message: 'Text not found'});
  }
});

app.post('/clearToSend', function(req, res){
  toSend = [];
  res.send("toSendCleared");
});

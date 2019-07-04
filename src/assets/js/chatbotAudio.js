var audio_reply = "";
var audio_array = [];
var hideAudio = false;
var request = new XMLHttpRequest();
var audioPlayer = document.querySelector("#bot_audio");
var audioTest = new Audio();
//console.log(audioTest);
//console.log(audioPlayer);

function showAudio(){
  var triangle = document.querySelector(".tri");
  var audio = document.querySelector(".bot-audio");
  if(hideAudio == false){
    audio.style.display = "flex";
    triangle.style.display = "flex";
    hideAudio = true;
  }
  else if(hideAudio){
    audio.style.display = "none";
    triangle.style.display = "none";
    hideAudio = false;
  }
}

function audio(reply){
  var print = document.querySelector(".test");
  audio_reply = reply;
  var index = audio_reply.indexOf(":");
  if(index == -1){
    print.innerHTML = audio_reply;
  }
  else{
    audio_reply = audio_reply.substr(0, index);
    print.innerHTML = audio_reply;
  }
  var end = false;
/*  while(!end){
    var index = audio_reply.indexOf(".");
    var to_send = audio_reply.substr(0, index);
    console.log(to_send);
    callAudio(to_send);
  }*/
}

var inp = "Fáilte romhat isteach, a Chiara.";
var inp2 = "Dia Dhuit, Is mise Taidhgín.";
var inp3 = "Cé thú féin?";
//callAudio(inp);

function callAudio(inp){
  request.open('GET', 'http://localhost:4001/getAudio/' + inp, true);
  request.send();
  request.onload = function(){
    console.log(this.response.toString());
    audioTest.src = this.response;
    console.log("Audio Source: " + audio.src);
    //var newReq = new XMLHttpRequest();
    //newReq.open('GET', 'http://localhost:4001/appendAudio/' + this.response, true);
    //newReq.send();
  }
}

/*var https = require('https');
function getAudio(){
  https.createServer(function(req, res){
    https.get('https://www.abair.tcd.ie/api/?input=' + inp + '&format=mp3&synth=ga_MU_nnc_nnmnkwii', (resp) => {
      resp.pipe(file);
      console.log("file piped")
    }).on("error", (err) => {
      console.log(err);
    });
  });
}
/*request.open('GET', 'https://www.abair.tcd.ie/api/?input=' + inp + '&format=mp3&synth=ga_MU_nnc_nnmnkwii', true);
request.send();
request.onload = function(){
  console.log(this.response);
}*/

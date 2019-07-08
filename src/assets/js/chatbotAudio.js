var audio_reply = "";
var audio_array = [];
var hideAudio = false;
var request = new XMLHttpRequest();
var audioPlayer;

var inp = "Fáilte romhat isteach, a Chiara.";
var inp2 = "Dia Dhuit, Is mise Taidhgín.";
var inp3 = "Cé thú féin?";
var source = "http://localhost:4001/"

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
  audioPlayer = document.getElementById("botaudio");
  //console.log(audioPlayer)
  var print = document.querySelector(".test");
  audio_reply = reply;
  var index = audio_reply.indexOf("<");
  if(index == -1){
    print.innerHTML = audio_reply;
  }
  else{
    audio_reply = audio_reply.substr(0, index);
    print.innerHTML = audio_reply;
  }
  var end = false;
  //callAudio();
}

function callAudio(inp){
  request.open('GET', 'http://localhost:4001/getAudio/' + inp2, true);
  request.setRequestHeader("Content-type", "audio/mpeg");
  request.send();
  request.onload = function(){
    console.log(this.response);
    console.log(audioPlayer);
    audioPlayer.src = this.response;
    console.log("Audio Source: " + audioPlayer.src);
  }
}

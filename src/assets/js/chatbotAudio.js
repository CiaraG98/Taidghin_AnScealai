var audio_reply = "";
var audio_array = [];
var hideAudio = false;
var request = new XMLHttpRequest();
var audioPlayer;
var link

var inp = "Fáilte romhat isteach, a Chiara";
var inp2 = "Dia Dhuit, Is mise Taidhgín";
var inp3 = "Cad a thabharfaidh mé ort?";


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
  callAudio(inp2);
  setTimeout(function(){
    callAudio(inp3);
  }, 6000);
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

}

function callAudio(inp){
  //console.log(inp);
  request.open('GET', 'http://localhost:4001/getAudio/' + inp, true);
  request.send();
  request.onload = function(){
    //console.log(JSON.stringify(this.response));
    //console.log(audioPlayer);
    audioPlayer.src = "https://www.abair.tcd.ie" + this.response;
    console.log("Audio Source: " + audioPlayer.src);
    audioPlayer.play();
  }
}

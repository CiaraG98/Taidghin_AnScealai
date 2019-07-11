var audio_reply = "";
var audio_array = [];
var hideAudio = false;
var request = new XMLHttpRequest();
var audioPlayer;
var inp;
var i = 0;
var j = 0;

var bubbleObjArr = [];

//console.log(bubbleObj);

function showAudioElement(){
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

function editMessageForAudio(){

}

function audio(reply){
  audio_array = [];
  audioPlayer = document.getElementById("botaudio");
  var print = document.querySelector(".test");
  audio_reply = reply;
  var index = audio_reply.indexOf("<");
  if(index != -1){
    audio_reply = audio_reply.substr(0, index);
  }
  print.innerHTML = audio_reply;
  inp = audio_reply.split(".");
  if(inp != ""){
    idForBubble++;
    var bubbleObj = { bubble: [], id: idForBubble };
    for(i = 0; i < inp.length; i++){
      var newSentence = {message: inp[i], url: ""};
      bubbleObj.bubble.push(newSentence);
    }
    bubbleObjArr.push(bubbleObj);
    console.log(bubbleObjArr);
    loopAudio(0, 0);
  }
}

function getAudioUrl(i){
  console.log(bubbleObjArr);
  var currentBubble;
  var length = bubbleObjArr.length;
  /*for(i = 0; i < bubbleObjArr.length; i++){
    var bubbleId = bubbleObjArr[i].id;
    if(bubbleId == id){
        currentBubble = bubbleObjArr[i];
    }
  }*/
  currentBubble = bubbleObjArr[length - 1];
  currentMessages = currentBubble.bubble;
  playAudio(currentMessages, 0);
}

function playAudio(array, i){
  if(array[i].url != ""){
    audioPlayer.src = array[i].url;
    audioPlayer.play();
    audioPlayer.addEventListener("ended", function(){
      i++;
      if(i < array.length){
        playAudio(array, i);
      }
    });
  }
}

function loopAudio(i){
  callAudio(inp[i]);
  i++;
  setTimeout(function(){
    if(i < inp.length){
      loopAudio(i);
    }
  }, 3000);
}

function callAudio(inp){
  console.log(inp);
  request.open('GET', 'http://localhost:4001/getAudio/' + inp, true);
  request.send();
  request.onload = function(){
    //console.log(this.response);
    for(i = 0; i < bubbleObjArr.length; i++){
      var bubbleMessages = bubbleObjArr[i];
      for(j = 0; j < bubbleMessages.bubble.length; j++){
        var bubble = bubbleMessages.bubble;
        var message = bubbleMessages.bubble[j].message;
        if(message == inp){
          console.log("match");
          bubble[j].url = "https://www.abair.tcd.ie" + this.response;
        }
      }
    }
    //audio_array.push("https://www.abair.tcd.ie" + this.response);
    //console.log("ready");
  }
}

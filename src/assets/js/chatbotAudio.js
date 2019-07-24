var audio_reply = "";
var audio_array = [];
var hideAudio = false;
var request = new XMLHttpRequest();
var audioPlayer;
var inp = [];
var i = 0;
var bubbleObjArr = [];
var speaker;
var buffer;
var click;
var messageDivs = [];
var testArray = [];
var isPlaying = false;

//shows audio element
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

//sets up for messages to be edited and urls to be called
function audio(reply){
  buffer = document.getElementById("buffering");
  click = document.querySelector(".click");
  audio_array = [];
  audioPlayer = document.getElementById("botaudio");
  //console.log(speaker);
  audio_reply = reply;
  editMessageForAudio();
  //console.log(inp);
  if(inp != ""){
    idForBubble++;
    var bubbleObj = { bubble: [], id: idForBubble, played: false};
    for(i = 0; i < inp.length; i++){
      var newSentence = {message: inp[i], url: ""};
      bubbleObj.bubble.push(newSentence);
    }
    bubbleObjArr.push(bubbleObj);
    //console.log(bubbleObjArr);
    loopAudio(0, 0);
  }
}

//edits messages to be played & adds them to array
function editMessageForAudio(){
  inp = [];
  var inputString = audio_reply;
  var index = inputString.indexOf("Ceist:");
  var j = 0;
  var length;
  for(i = 0; i < inputString.length; i++){
    if(inputString[i] == "." || inputString[i] == ":" || inputString[i] == "?" || inputString[i] == "!"){
      length = i - j;
      var newString = inputString.substr(j, length);
      //console.log(newString);
      j = i + 1;
      if(newString != "ERR" || newString != " ")
        inp.push(newString);
    }
    if(inputString[i] == "'"){
      inputString[i] == inputString[i].replace("'", "");
    }
  }
  //console.log(inp);
  var currentSentence;
  for(i = 0; i < inp.length; i++){
    currentSentence = inp[i];
    //console.log(currentSentence);
    for(j = 0; j < currentSentence.length; j++){
      indexOf1 = currentSentence.indexOf("<b>");
      indexOf2 = currentSentence.indexOf("<i>");
      indexOf3 = currentSentence.indexOf("</b>");
      indexOf4 = currentSentence.indexOf("</i>");
      indexOf5 = currentSentence.indexOf("<br>");
      indexOf6 = currentSentence.indexOf("-");
      if(indexOf1 != -1 && indexOf2 != -1 && indexOf3 != -1 && indexOf4 != -1){
        inp[i] = inp[i].replace("<b>", "");
        inp[i] = inp[i].replace("</b>", "");
        inp[i] = inp[i].replace("<i>", "");
        inp[i] = inp[i].replace("</i>", "");
      }
      if(indexOf5 != -1){
        inp[i] = inp[i].replace("<br>", "");
      }
      if(indexOf6 != -1){
        inp[i] = inp[i].replace("-", "");
      }
    }
  }
}

//loop-like function calls request for audio every 3 seconds
function loopAudio(i){
  click.style.display = "none";
  buffer.style.display = "flex";
  /*callAudio(inp[i]);
  i++;
  setTimeout(function(){
    if(i < inp.length){
      loopAudio(i);
    }
    else{
      buffer.style.display = "none";
    }
  }, 300);*/
  for(i = 0; i < inp.length; i++){
    callAudio(inp[i]);
  }
}

//gets audio from server and adds urls to their objects to be played when called upon
function callAudio(inp){
  let index = inp.indexOf("Ceist:");
  let index2 = inp.indexOf("_____");
  if(index == -1 && index2 == -1){
    console.log(inp);
    request.open('GET', 'http://localhost:4001/getAudio/' + inp, true);
    request.send();
    request.onload = function(){
      //console.log(this.response);
      console.log(JSON.parse(this.response));
      testArray = JSON.parse(this.response);
      buffer.style.display = "none";
      click.style.display = "block";
      clearToSendArray();
      /*
      for(i = 0; i < bubbleObjArr.length; i++){
        var bubbleMessages = bubbleObjArr[i];
        for(j = 0; j < bubbleMessages.bubble.length; j++){
          var bubble = bubbleMessages.bubble;
          var message = bubbleMessages.bubble[j].message;
          if(message == inp){
            bubble[j].url = "https://www.abair.tcd.ie" + this.response;
            console.log("got url");
          }
        }
      }*/
    }
  }
}

function clearToSendArray(){
  request.open("POST", 'http://localhost:4001/clearToSend/', true);
  request.send();
  request.onload = function(){
    console.log(this.response);
  }
}

var currentBubble;

//sets up which array to be played when speaker button is clicked, right now it plays most recent
function getAudioUrl(i){
  if(isPlaying == true){
    audioPlayer.pause();
    isPlaying = false;
    return;
  }
  var length = bubbleObjArr.length;
  currentBubble = bubbleObjArr[length - 1];
  currentMessages = currentBubble.bubble;
  playAudio(testArray, 0);
  //playAudio(currentMessages, 0);
}

//plays audio
function playAudio(array, i){
  isPlaying = true;
  if(array[i] != ""){
    audioPlayer.src = array[i];
    audioPlayer.play();
    audioPlayer.addEventListener("ended", function(){
      i++;
      if(i < array.length){
        playAudio(array, i);
      }
      else{
        isPlaying = false;
      }
    });
  }
}

function testFunction(id){
  console.log(id);
}

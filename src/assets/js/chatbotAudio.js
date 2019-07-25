var request = new XMLHttpRequest();
var audio_reply = "";
var audio_array = [];
var hideAudio = false;
var audioPlayer;
var inp = [];
var i = 0;
var bubbleObjArr = [];
var speaker;
var buffer;
var click;
var testArray = [];
var isPlaying = false;

//sets up for messages to be edited and urls to be called
function audio(reply){
  audio_array = [];
  audio_reply = reply;
  editMessageForAudio();
  //Create Bubble Objects
  if(inp != ""){
    var bubbleObj = { bubble: [], id: thisId };
    for(i = 0; i < inp.length; i++){
      var newSentence = {message: inp[i], url: ""};
      bubbleObj.bubble.push(newSentence);
    }
    bubbleObjArr.push(bubbleObj);
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
      j = i + 2;
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

//Could be moved to audio function
function loopAudio(i){
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
      clearToSendArray();
      getAudioUrl();
      //sortMessages(testArray);
      //console.log(bubbleObjArr);
      /*for(i = 0; i < bubbleObjArr.length; i++){
        var thisBubbleObj = bubbleObjArr[i];
        for(j = 0; j < thisBubbleObj.bubble.length; j++){
          var bubble = thisBubbleObj.bubble[j];
          if(bubble != ""){
            var bubbleMessage = thisBubbleObj.bubble[j].message;
            for(k = 0; k < testArray.length; k++){
              if(bubbleMessage == testArray[k].message){
                bubble.url = testArray[k].url;
              }
            }
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
function getAudioUrl(){
  var length = bubbleObjArr.length;
  currentBubble = bubbleObjArr[length - 1];
  currentMessages = currentBubble.bubble;
  playAudio(testArray, 0);
  //playAudio(currentMessages, 0);
}

//plays audio
var prevSource = "";
function playAudio(array, i){
  isPlaying = true;
  bubblePlayed = false;
  if(array[i] != ""){
    if(array[i] == prevSource){
      audioPlayer.src = array[i+1];
    }
    else{
      audioPlayer.src = array[i];
    }
    prevSource = audioPlayer.src;
    audioPlayer.play();
    audioPlayer.addEventListener("ended", function(){
      i++;
      if(i < array.length){
        playAudio(array, i);
      }
      else{
        isPlaying = false;
        bubblePlayed = true;
      }
    });
  }
}

function manualPlay(id){

}

var request = new XMLHttpRequest();
var audio_reply = "";
var audioPlayer;
var audioCheckbox;
var bubbleObjArr = [];
var thisId = 0;
var duration;

//sets up for messages to be edited and urls to be called
function audio(newReply, id, isUser){
  audio_reply = newReply;
  thisId = id;
  if(isUser == false){
    editMessageForAudio();

    //Create Bubble Objects
    if(inp != ""){
      var bubbleText = "";
      for(i = 0; i < inp.length; i++){
        bubbleText = bubbleText.concat(inp[i], ".");
      }
      var newBubble = { text: bubbleText , id: thisId, url: null, isUser: isUser};
      bubbleObjArr.push(newBubble);
      testCallAudio(bubbleText, thisId);
    }
  }
  else{
    var newBubble = { text: audio_reply , id: thisId, url: null, isUser: isUser};
    bubbleObjArr.push(newBubble);
    testCallAudio(audio_reply, thisId);
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

function testCallAudio(testString, id){
  console.log(testString);
  request.open('POST', 'http://localhost:4001/testGetAudio/' + testString, true);
  request.send();
  request.onload = function(){
    //console.log(JSON.parse(this.response).html[0][0]);
    var bubbleUrl =JSON.parse(this.response).audio[0];
    for(i = 0; i < bubbleObjArr.length; i++){
      if(id == bubbleObjArr[i].id){
        bubbleObjArr[i].url = bubbleUrl;
        if(audioCheckbox.checked == true && bubbleObjArr[i].isUser == false)
          playAudio(bubbleObjArr[i]);
      }
    }
  }
}

//plays audio
function playAudio(bubble){
  if(bubble.url){
    audioPlayer = new Audio(bubble.url);
    audioPlayer.play();
  }
}

function manualPlay(id){
  console.log(id);
  for(i = 0; i < bubbleObjArr.length; i++){
    if(bubbleObjArr[i].id == id){
      playAudio(bubbleObjArr[i]);
    }
  }
}

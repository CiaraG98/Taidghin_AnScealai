window.onload = init;
var ainmneacha = [];
var keepMessages = false;
var bubbleId = 0;
var speakerId = 0;
var thisMessage = 0;
var holdMessages = false;
var bubblePlayed = false;
var played = false;
var messageDivs = [];
var dictPopup;
var dictTri;
var dictText;
var dictImg;
var thisVerb;
var dictOn = false;
var play = false;

//for database....
var currentTopic = "";
var complete = false;
var messageforDb = "";
var switchTopic = false;
var level1Complete = false;
var level2Complete = false;
var level3Complete = false;
var date = new Date();

//Read Google Sheet with slenderised names...
function init(){
  var names = "https://docs.google.com/spreadsheets/d/1vvA9n123EJ0hmuQcnwE88JpsOVgxvUgDonPSaoULP3k/edit?usp=sharing";
  Tabletop.init({key: names, callback: loadData, simpleSheet: true } );
}

function loadData(data, tabletop){
  for(i = 0; i < data.length; i++){
    ainmneacha[i] = data[i];
  }
  setup();
}

function setup(){
  testButton = document.createElement("button");
  testButton.style.display = "none";
  testButton.setAttribute("id", "testButton");
  clearName();
  load("biAL", "start", true);
  audioPlayer = document.getElementById("botaudio");
  audioCheckbox = document.querySelector(".audioCheckbox");
  dictPopup = document.querySelector(".dictPopup");
  dictText = document.querySelector(".dictText");
  dictTri = document.querySelector(".tri");


  //if the 'chatbot' button is clicked
  var button = document.getElementById("chat-button");
  //console.log(button);
  if(button){
    button.addEventListener("click", function(){
      $(".messages").empty();
      load("start");
    });
  }

  //collapsable menu for the contents
  var coll = document.getElementsByClassName("collapsable");
  var i;
  for(i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function(){
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if(content.style.maxHeight){
        content.style.maxHeight = null;
      }
      else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
      $(".bot-contents").animate({ scrollTop: $(".bot-contents")[0].scrollHeight }, 200);
    });
  }

}

function showBot(){
  var bot = document.querySelector(".bg-modal");
  var menu = document.querySelector(".bot-contents");
  console.log(bot);
  bot.style.right = "0px";
  menu.style.right = "200px";
}

function hideBot(){
  var bot = document.querySelector(".bg-modal");
  var menu = document.querySelector(".bot-contents");
  console.log(bot);
  bot.style.right = "-500px";
  menu.style.transition = "0.4s";
  menu.style.right = "-500px";
  menu.style.opacity = "0";
  clearName();
}

function showContents(){
  contentsClicked = true;
  var menu = document.querySelector(".bot-contents");
  if(menu.style.opacity == 0){
    menu.style.right = "300px";
    menu.style.opacity = "1";
  }
  else if(menu.style.opacity == 1){
    menu.style.right = "0px";
    menu.style.opacity = "0";
  }
}

//loads file chosen by the user
function load(fileId, start, toPlay){
  //for dictionary
  if(fileId.indexOf("quiz") == -1){
    var length = fileId.length - 2;
    thisVerb = fileId.substr(0, length);
    if(thisVerb == "bi") thisVerb = "bí";
  }

  if(toPlay) play = true;
  if(fileId == "start"){
    switchTopic = false;
    currentTopic = fileId;
  }
  else{
    currentTopic = fileId;
    switchTopic = true;
  }

  console.log("To Load: " + fileId);
  if(keepMessages == false){
    $(".messages").empty();
  }
  for(i = 0; i < files.length; i++){
    if(fileId == files[i].id){
      console.log(files[i].id + " " + files[i].file);
      bot = new RiveScript({utf8: true});
      bot.loadFile(files[i].file).then( () => {
        bot.sortReplies();
        console.log(fileId + " loaded");
        if(fileId == "start") chatSetup("start", false, false);
        else if(start != null) chatSetup(start);
        else chatSetup("start");
      });
    }
  }
  keepMessages = false;
}

function loadFromChat(fileId, start){ load(fileId, start); }

function appendTypingIndicator(){
  stillChatting = true;
  $(".messages").append($("<div class=\"typing-indicator\"><div class=\"user-photo\"><img src=\"assets/logo-S.png\" id=\"bot-img\"></div><div class=\"dots\"><p class=\"chat-message\"><span id=\"typ1\"></span><span id=\"typ2\"></span><span id=\"typ3\"></span></p></div></div></div>"));
  $(".typing-indicator").delay(1000).fadeOut("fast");
  $(".chatlogs").animate({ scrollTop: $(".chatlogs")[0].scrollHeight }, 200);
}

function appendMessage(isBot, isUser, text, showButtons){
  speakerId++;
  bubbleId++;
  var newMessage = document.createElement("div");
  var photoSrc = "";
  var photoId = "";
  if(isBot == true){
    newMessage.setAttribute("class", "chat bot");
    photoSrc = "assets/logo-S.png";
    photoId = "bot-img";
  }
  else if(isUser == true){
    newMessage.setAttribute("class", "chat user");
    photoSrc = "assets/education.png";
    photoId = "user-img";
  }
  newMessage.setAttribute("id", bubbleId);
  var userphotoDiv = document.createElement("div");
  userphotoDiv.setAttribute("class", "user-photo");
  var photo = document.createElement("img");
  photo.src = photoSrc;
  photo.setAttribute("id", photoId);
  userphotoDiv.appendChild(photo)
  newMessage.appendChild(userphotoDiv);

  var newP = document.createElement("p");
  newP.setAttribute("class", "chat-message");
  var newSpan = document.createElement("span");
  newSpan.setAttribute("class", "output");
  newSpan.innerHTML = text;
  newP.appendChild(newSpan);

  var speakerImg = document.createElement("img");
  speakerImg.setAttribute("class", "speaker");
  speakerImg.setAttribute("id", speakerId);
  speakerImg.src = "assets/speaker.png";
  speakerImg.onclick = function(){
    if(isPlaying == false) manualPlay(speakerImg.id, newMessage.id);
  }
  newP.appendChild(speakerImg);

  var pauseImg = document.createElement("img");
  pauseImg.setAttribute("class", "pauseButton");
  pauseImg.src = "assets/pause.png"
  pauseImg.onclick = function(){
    audioPlayer.pause();
    isPlaying = false;
  }
  newP.appendChild(pauseImg);

  if(isAQuestion){
    dictImg = document.createElement("img");
    dictImg.src = "assets/dict.png";
    dictImg.setAttribute("class", "dictButton");
    dictImg.onclick = function(){
      if(dictOn == false){
        dictPopup.style.display = "flex";
        dictTri.style.display = "flex";
        dictText.innerHTML = thisVerb;
        dictOn = true;
      }
      else if(dictOn){
        dictPopup.style.display = "none";
        dictTri.style.display = "none";
        dictOn = false;
      }
    }
    newP.appendChild(dictImg);
    isAQuestion = false;
  }

  if(showButtons == false){
    speakerImg.style.display = "none";
    pauseImg.style.display = "none";
    dictImg.style.display = "none";
}

  newMessage.appendChild(newP);
  $(".messages").append(newMessage);
  messageDivs.push(newMessage);
}

//CHAT REPLIES AND INPUTS
function chatSetup(text, holdMessages, showButtons){
  //console.log(holdMessages);
  var messages = document.querySelector(".messages");
  if(holdMessages == "true" && audioCheckbox.checked == true){
    audioPlayer.addEventListener("ended", function(){
      isPlaying = false;
      bot.reply("local-user", text).then( (reply) => {
        if(reply != ""){
          //console.log(reply);
          makeMessageObj(true, reply);
          appendTypingIndicator();
          setTimeout(function(){
            appendMessage(true, false, reply, showButtons);
            if(play) audio(reply, bubbleId, false);

            $(".chatlogs").animate({ scrollTop: $(".chatlogs")[0].scrollHeight }, 200);
          }, 1200);
        }
      });
    });
  }
  else{
    bot.reply("local-user", text).then( (reply) => {
      if(reply != ""){
        //console.log(reply);
        makeMessageObj(true, reply);
        appendTypingIndicator();
        setTimeout(function(){
          appendMessage(true, false, reply, showButtons);
          if(play) audio(reply, bubbleId, false);

          $(".chatlogs").animate({ scrollTop: $(".chatlogs")[0].scrollHeight }, 200);
        }, 1200);
      }
    });
  }
  return "";
}

function chat(){
  //if(holdInput) setTimeout(function(){}, 1200);
  var input = document.getElementById("user_input").value;
  if(input != ""){
    $("form").on("submit", (event) => {
      event.preventDefault();
    });
    document.getElementById("user_input").value = "";
    makeMessageObj(false, input);
    appendMessage(false, true, input);
    audio(input, bubbleId, true)
    $(".chatlogs").animate({ scrollTop: $(".chatlogs")[0].scrollHeight }, 200);
  }
  bot.reply("local-user", input).then( (reply) => {
    if(reply != ""){
      makeMessageObj(true, reply);
      appendTypingIndicator();
      setTimeout(function(){
        appendMessage(true, false, reply);
        if(play) audio(reply, bubbleId, false);
        $(".chatlogs").animate({ scrollTop: $(".chatlogs")[0].scrollHeight }, 200);
      }, 1200);
      $(".chatlogs").animate({ scrollTop: $(".chatlogs")[0].scrollHeight }, 200);
    }
  });
}

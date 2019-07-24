window.onload = init;
var ainmneacha = [];
var keepMessages = false;
var idForBubble = 0;
var thisId = 0;
var speakerId = 0;
var thisMessage = 0;
var stillChatting = false;

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
  clearName();
  load("start", "start");

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
function load(fileId, start){
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
        if(start != null) chatSetup(start);
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

//CHAT REPLIES AND INPUTS
function chatSetup(text){
  var messages = document.querySelector(".messages");
  bot.reply("local-user", text).then( (reply) => {
    audio(reply);
    thisId++;
    speakerId++;
    if(reply != ""){
      makeMessageObj(true, reply);
      appendTypingIndicator();
      setTimeout(function(){
        var newMessage = document.createElement("div");
        newMessage.setAttribute("class", "chat bot");
        newMessage.setAttribute("id", thisId);
        var userphotoDiv = document.createElement("div");
        userphotoDiv.setAttribute("class", "user-photo");
        var photo = document.createElement("img");
        photo.src = "assets/logo-S.png";
        photo.setAttribute("id", "bot-img");
        userphotoDiv.appendChild(photo)
        newMessage.appendChild(userphotoDiv);

        var newP = document.createElement("p");
        newP.setAttribute("class", "chat-message");
        var newSpan = document.createElement("span");
        newSpan.setAttribute("class", "output");
        newSpan.innerHTML = reply;
        newP.appendChild(newSpan);

        var speakerImg = document.createElement("img");
        speakerImg.setAttribute("class", "speaker");
        speakerImg.setAttribute("id", speakerId);
        speakerImg.src = "assets/speaker.png";
        speakerImg.onclick = function(){
          testFunction(speakerImg.id);
        }
        newP.appendChild(speakerImg);

        newMessage.appendChild(newP);
        $(".messages").append(newMessage);
        messageDivs.push(newMessage);
        //$(".messages").append($("<div name=\"bubble\" class=\"chat bot\"><div class=\"user-photo\"><img src=\"assets/logo-S.png\" id=\"bot-img\"></div><p class=\"chat-message\"><span class=\"output\">" + reply
        //+ "</span></p></div></div>"));
        //$(".bubble").attr("id", thisId);
        //var bubbleTest = document.querySelector(".bubble");
        //console.log(bubbleTest);
        $(".chatlogs").animate({ scrollTop: $(".chatlogs")[0].scrollHeight }, 200);
      }, 1200);
    }
  });
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
    $(".messages").append($("<div class=\"chat user\"><div class=\"user-photo\"><img src=\"assets/education.png\" id=\"user-img\"></div><p class=\"chat-message\"><span class=\"input\">" + input
    + "</span></p></div></div>"));
    console.log(input);
    $(".chatlogs").animate({ scrollTop: $(".chatlogs")[0].scrollHeight }, 200);
  }
  bot.reply("local-user", input).then( (reply) => {
    audio(reply);
    if(reply != ""){
      makeMessageObj(true, reply);
      appendTypingIndicator();
      setTimeout(function(){
        var newMessage = document.createElement("div");
        newMessage.setAttribute("class", "chat bot");
        newMessage.setAttribute("id", thisId);
        var userphotoDiv = document.createElement("div");
        userphotoDiv.setAttribute("class", "user-photo");
        var photo = document.createElement("img");
        photo.src = "assets/logo-S.png";
        photo.setAttribute("id", "bot-img");
        userphotoDiv.appendChild(photo)
        newMessage.appendChild(userphotoDiv);

        var newP = document.createElement("p");
        newP.setAttribute("class", "chat-message");
        var newSpan = document.createElement("span");
        newSpan.setAttribute("class", "output");
        newSpan.innerHTML = reply;
        newP.appendChild(newSpan);

        var speakerImg = document.createElement("img");
        speakerImg.setAttribute("class", "speaker");
        speakerImg.setAttribute("id", speakerId);
        speakerImg.src = "assets/speaker.png";
        speakerImg.onclick = function(){
          testFunction(speakerImg.id);
        }
        newP.appendChild(speakerImg);

        newMessage.appendChild(newP);
        $(".messages").append(newMessage);
        messageDivs.push(newMessage);
        //$(".messages").append($("<div name=\"bubble\" class=\"chat bot\"><div class=\"user-photo\"><img src=\"assets/logo-S.png\" id=\"bot-img\"></div><p class=\"chat-message\"><span class=\"output\">" + reply
        //+ "</span></p></div></div>"));
        $(".chatlogs").animate({ scrollTop: $(".chatlogs")[0].scrollHeight }, 200);
      }, 1200);
      $(".chatlogs").animate({ scrollTop: $(".chatlogs")[0].scrollHeight }, 200);
    }
  });
}

//<img src=\"assets/speaker.png\" id=\"speaker\" onclick=\"getAudioUrl(0)\">

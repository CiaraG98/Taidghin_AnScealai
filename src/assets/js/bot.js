window.onload = init;
var botNames = [];
var userName;
var botName = "taigin";
//var fs = require('fs');
//Read Google Sheet with slenderised names...
function init(){
  var names = "https://docs.google.com/spreadsheets/d/1vvA9n123EJ0hmuQcnwE88JpsOVgxvUgDonPSaoULP3k/edit?usp=sharing";
  Tabletop.init({key: names, callback: loadData, simpleSheet: true } );
}

function loadData(data, tabletop){
  for(i = 0; i < data.length; i++){
    botNames[i] = data[i];
  }
  setup();
}

function setup(){
  //console.log(botNames[0]);
  clearName();
  bot = new RiveScript({utf8: true});
  bot.loadFile("assets/rive/start.rive").then( () => {
    bot.sortReplies();
    console.log("Bot Ready");
    chatSetup();
  });

  //if the 'chatbot' button is clicked
  var button = document.getElementById("chat-button");
  console.log(button);
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
    });
  }
}

function showBot(){
  var bot = document.querySelector(".bg-modal");
  var menu = document.querySelector(".bot-contents");
  console.log(bot);
  bot.style.right = "0px";
  menu.style.right = "50px"
}

function hideBot(){
  var bot = document.querySelector(".bg-modal");
  var menu = document.querySelector(".bot-contents");
  console.log(bot);
  bot.style.right = "-500px";
  menu.style.right = "-500px";
  clearName();
}

function showContents(){
  var menu = document.querySelector(".bot-contents");
  menu.style.right = "300px";
  menu.style.opacity = "1";
}

function hideContents(){
  var menu = document.querySelector(".bot-contents");
  menu.style.right = "0px";
  menu.style.opacity = "0";
}

//loads file chosen by the user
function load(fileId){
  $(".messages").empty();
  for(i = 0; i < files.length; i++){
    if(fileId == files[i].id){
      console.log(files[i].id + " " + files[i].file);
      bot = new RiveScript({utf8: true});
      bot.loadFile(files[i].file).then( () => {
        bot.sortReplies();
        console.log(fileId + " loaded");
        //hideContents();
        chatSetup();
      });
    }
  }
}

//begins the chat
function chatSetup(){
  bot.reply("local-user", "start").then( (reply) => {
    console.log(reply);
    $(".messages").append($("<div class=\"chat bot\"><div class=\"user-photo\"><img src=\"assets/logo-S.png\" id=\"bot-img\"></div><p class=\"chat-message\"><span class=\"output\">" + reply
    + "</span></p></div></div>"));
    //document.getElementById("output").innerHTML = reply;
  });
}

//conversation takes place
function chat(){
  $("form").on("submit", (event) => {
    event.preventDefault();
  });
  var input = document.getElementById("user_input").value;
  if(input != ""){
    document.getElementById("user_input").value = "";
    $(".messages").append($("<div class=\"chat user\"><div class=\"user-photo\"><img src=\"assets/education.png\" id=\"user-img\"></div><p class=\"chat-message\"><span class=\"input\">" + input
    + "</span></p></div></div>"));
    console.log(input);
  }
  bot.reply("local-user", input).then( (reply) => {
    console.log(reply);
    $(".messages").append($("<div class=\"typing-indicator\"><div class=\"user-photo\"><img src=\"assets/logo-S.png\" id=\"bot-img\"></div><div class=\"dots\"><p class=\"chat-message\"><span id=\"typ1\"></span><span id=\"typ2\"></span><span id=\"typ3\"></span></p></div></div></div>"));
    $(".typing-indicator").delay(1000).fadeOut("fast");
    setTimeout(function(){
      $(".messages").append($("<div class=\"chat bot\"><div class=\"user-photo\"><img src=\"assets/logo-S.png\" id=\"bot-img\"></div><p class=\"chat-message\"><span class=\"output\">" + reply
      + "</span></p></div></div>"));
      $(".chatlogs").animate({ scrollTop: $(".chatlogs")[0].scrollHeight }, 200);
    }, 1200);
    //document.getElementById("output").innerHTML = reply;
    $(".chatlogs").animate({ scrollTop: $(".chatlogs")[0].scrollHeight }, 200);
    //log(input, reply, userName);
  });
}

/*function log(input, reply, userName){
  var log = userName + ": " + input + "\n";
  log += "Bot: " + reply + "\n";
  console.log(log);

  fs.appendFile("logs.txt", log, function(err){
    if(err) throw err;
    else console.log("Data appended");
  });
}*/

//rivescript functions...
function searchNames(name){
  var slenderName;
  for(i = 0; i < botNames.length; i++){
    if(name == botNames[i].ainm){
      slenderName = botNames[i].slender;
      localStorage.setItem("name", slenderName);
    }
  }
  return slenderName;
}

function storeName(name){
  userName = name;
  var slName = searchNames(name);
  if(slName) localStorage.setItem("name", slName);
  else localStorage.setItem("name", name);
  return "";
}

function getName(){
  var name = localStorage.getItem("name");
  if(name) return name;
  else return userName;
}

function getBotName(){
  if(botName) return botName;
}

function clearName(){
  localStorage.removeItem("name");
}

function isNameStored(){
  if(localStorage.getItem("name")) return true;
  else return false;
}


//if the x is clicked
/*var close_button = document.querySelector(".bot-close");
console.log(close_button);
if(close_button){
  close_button.addEventListener("click", function(){
  //document.querySelector(".bg-modal").style.display = "none";
  });
}*/

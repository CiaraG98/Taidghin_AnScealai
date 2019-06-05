function setup(){
  chatbot = new RiveScript({utf8: true});
  chatbot.loadFile("assets/rive/start.rive").then( () => {
    chatbot.sortReplies();
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
      chatbot = new RiveScript({utf8: true});
      chatbot.loadFile(files[i].file).then( () => {
        chatbot.sortReplies();
        console.log("Bot File Ready");
        hideContents();
        chatSetup();
      });
    }
  }
}

//begins the chat
function chatSetup(){
  chatbot.reply("local-user", "start").then( (reply) => {
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
  chatbot.reply("local-user", input).then( (reply) => {
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
  });
}

window.onload = setup;

//if the x is clicked
/*var close_button = document.querySelector(".bot-close");
console.log(close_button);
if(close_button){
  close_button.addEventListener("click", function(){
  //document.querySelector(".bg-modal").style.display = "none";
  });
}*/

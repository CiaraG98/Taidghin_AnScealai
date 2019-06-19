var files = [
  {id: "start", file: "assets/rive/start.rive"},
  {id: "bc", file: "assets/rive/briathraneamhrialtaChaite.rive"},
  {id: "bl", file: "assets/rive/briathraneamhrialtaLaithreach.rive"},
  {id: "BriathraNeamhrialta", file: "assets/rive/BriathraNeamhrialta.rive"},
  {id: "BriathraNeamhrialtaInfo", file: "assets/rive/BriathraNeamhrialtaInfo.rive"},
  {id: "BQuiz", file: "assets/rive/BQuiz.rive"},
  {id: "deanAC", file: "assets/rive/deanAC.rive"},
  {id: "deanAL", file: "assets/rive/deanAL.rive"},
  {id: "deanAF", file: "assets/rive/deanAF.rive"},
  {id: "deanMC", file: "assets/rive/deanMC.rive"},
  {id: "beirAC", file: "assets/rive/beirAC.rive"},
  {id: "beirAL", file: "assets/rive/beirAL.rive"},
  {id: "beirAF", file: "assets/rive/beirAF.rive"},
  {id: "beirMC", file: "assets/rive/beirMC.rive"},
  {id: "faighAC", file: "assets/rive/faighAC.rive"},
  {id: "faighAL", file: "assets/rive/faighAL.rive"},
  {id: "faighAF", file: "assets/rive/faighAF.rive"},
  {id: "faighMC", file: "assets/rive/faighMC.rive"},
  {id: "feicAC", file: "assets/rive/feicAC.rive"},
  {id: "feicAL", file: "assets/rive/feicAL.rive"},
  {id: "feicAF", file: "assets/rive/feicAF.rive"},
  {id: "feicMC", file: "assets/rive/feicMC.rive"},
  {id: "abairAC", file: "assets/rive/abairAC.rive"},
  {id: "abairAL", file: "assets/rive/abairAL.rive"},
  {id: "abairAF", file: "assets/rive/abairAF.rive"},
  {id: "abairMC", file: "assets/rive/abairMC.rive"},
  {id: "tabhairAC", file: "assets/rive/tabhairAC.rive"},
  {id: "tabhairAL", file: "assets/rive/tabhairAL.rive"},
  {id: "tabhairAF", file: "assets/rive/tabhairAF.rive"},
  {id: "tabhairMC", file: "assets/rive/tabhairMC.rive"},
  {id: "tarAC", file: "assets/rive/tarAC.rive"},
  {id: "tarAL", file: "assets/rive/tarAL.rive"},
  {id: "tarAF", file: "assets/rive/tarAF.rive"},
  {id: "tarMC", file: "assets/rive/tarMC.rive"},
  {id: "biAC", file: "assets/rive/biAC.rive"},
  {id: "biAL", file: "assets/rive/biAL.rive"},
  {id: "biAF", file: "assets/rive/biAF.rive"},
  {id: "biMC", file: "assets/rive/biMC.rive"},
  {id: "teighAC", file: "assets/rive/teighAC.rive"},
  {id: "teighAL", file: "assets/rive/teighAL.rive"},
  {id: "teighAF", file: "assets/rive/teighAF.rive"},
  {id: "teighMC", file: "assets/rive/teighMC.rive"},
  {id: "ithAC", file: "assets/rive/ithAC.rive"},
  {id: "ithAL", file: "assets/rive/ithAL.rive"},
  {id: "ithAF", file: "assets/rive/ithAF.rive"},
  {id: "ithMC", file: "assets/rive/ithMC.rive"},
  {id: "cloisAC", file: "assets/rive/cloisAC.rive"},
  {id: "cloisAL", file: "assets/rive/cloisAL.rive"},
  {id: "cloisAF", file: "assets/rive/cloisAF.rive"},
  {id: "cloisMC", file: "assets/rive/cloisMC.rive"},
];

var userName;
var botName = "Taidhgín";
var progress = 0;
var currentQuestion;
var prevQuestion = -1;
var wrongCount = 0;
var answer2;
var answeringQuestions = false;
var isLevelComplete = false;
var isQuizComplete = false;
var quiz = false;

function searchNames(name){
  var slenderName;
  for(i = 0; i < ainmneacha.length; i++){
    if(name == ainmneacha[i].ainm){
      slenderName = ainmneacha[i].slender;
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

function getUserName(){
  return userName;
}
function getBotName(){
  if(botName) return botName;
}

function clearName(){
  localStorage.removeItem("name");
  userName = "";
}

function isNameStored(){
  if(localStorage.getItem("name")) return true;
  else return false;
}

function askName(){
  var greeting = "Dia Dhuit! Is mise " + getBotName() + ". ";
  var askNames = ["Cén t-ainm atá ort?", "Cad is ainm duit?", "Cé thú féin?", "Cad a thabharfaidh mé ort?"];
  var ran = getRandomIntInclusive(0, askNames.length - 1);
  return greeting + askNames[ran];
}

function getProgress(){
  if(isLevelComplete == true && quiz == false) return "";
  if(isQuizComplete == true) return "";
  else return "<br>Scór: " + progress + "<br>";
}

function resetProgress(){
  progress = 0;
  return "";
}

function getLink(){
  var links = ["An bhfuil aon fhocail nár thuig tú? Féach sa bhfoclóir ag www.teanglann.ie",
    "Úsáid www.tearma.ie chun cabhrú leat munar thuig tú téarma ar leith."];
  var ran = getRandomIntInclusive(0, links.length - 1);
  return links[ran];
}

function triailAris(){
  var rep = ["Féach ar an gceann seo arís, a ", "Beagnach ceart ach féach arís air, a "];
  var ran = getRandomIntInclusive(0, rep.length - 1);
  return rep[ran] + getName() + "."
}

function getRandomQuestion(questions){
  if(isLevelComplete == true && quiz == false){
    console.log(quiz + isLevelComplete);
    return "";
  }
  if(isQuizComplete == true) return "";
  var index = getRandomIntInclusive(0, questions.length - 1);
  //console.log("array: " + questions);
  //console.log("size: " + questions.length);
  console.log("index: " +  index);
  if(index == prevQuestion) index = getRandomIntInclusive(0, questions.length - 1);
  prevQuestion = index;
  currentQuestion = questions[index];
  if("answer2" in currentQuestion){
    answer2 = currentQuestion.answer2;
  }
  console.log(currentQuestion.question + ", " + currentQuestion.answer + " " + answer2);
  var ceist = "Ceist: " + currentQuestion.question;
  return ceist;
}

function getCurrentAnswer(){
  console.log(currentQuestion.answer);
  return currentQuestion.answer;
}

function getRandomReply(){
  if(isLevelComplete == true && quiz == false) return "";
  if(isQuizComplete == true) return "";
  var reply = "Maith thú, a " + getName() + ". ";
  var reply2 = "An ceart ar fad agat, a " + getName() + ". ";
  var reply3 = "Sin agat é, a " + getName() + ". ";
  var reply4 = "An mhaith ar fad!"
  var replies = [reply, reply2, reply3, reply4];
  var i = getRandomIntInclusive(0, replies.length-1);
  //console.log(i);
  return replies[i];
}

function getRandomIntInclusive(min, max) {
  //console.log(min + " " + max);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function changeProgress(sign){
  if(sign == "+"){
    //console.log(sign);
    progress++;
    if(progress == 3){
      isLevelComplete = true;
      console.log("level complete")
    }
    if(progress == 10){
      isQuizComplete = true;
      console.log("quiz complete");
    }
  }
  console.log("progress " +  progress);
  return "";
}

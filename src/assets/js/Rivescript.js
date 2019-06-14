var files = [
  {id: "start", file: "assets/rive/start.rive"},
  {id: "bc", file: "assets/rive/briathraneamhrialtaChaite.rive"},
  {id: "bl", file: "assets/rive/briathraneamhrialtaLaithreach.rive"},
  {id: "BriathraNeamhrialta", file: "assets/rive/BriathraNeamhrialta.rive"},
  {id: "BriathraNeamhrialtaInfo", file: "assets/rive/BriathraNeamhrialtaInfo.rive"},
  {id: "BQuiz", file: "assets/rive/BQuiz.rive"},
  {id: "dean", file: "assets/rive/dean.rive"},
  {id: "beir", file: "assets/rive/beir.rive"},
  {id: "faigh", file: "assets/rive/faigh.rive"},
  {id: "feic", file: "assets/rive/feic.rive"},
  {id: "abairAC", file: "assets/rive/abairAC.rive"},
  {id: "abairAL", file: "assets/rive/abairAL.rive"},
  {id: "abairAF", file: "assets/rive/abairAF.rive"},
  {id: "abairMC", file: "assets/rive/abairMC.rive"},
  {id: "tabhair", file: "assets/rive/tabhair.rive"},
  {id: "tar", file: "assets/rive/tar.rive"},
  {id: "bi", file: "assets/rive/bi.rive"},
  {id: "teigh", file: "assets/rive/teigh.rive"},
  {id: "ith", file: "assets/rive/ith.rive"},
  {id: "clois", file: "assets/rive/clois.rive"},
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

function getProgress(){
  if(isLevelComplete == true && quiz == false) return "";
  if(isQuizComplete == true) return "";
  else return "<br>Scór: " + progress + "<br>";
}

function resetProgress(){
  progress = 0;
  wrongCount = 0;
  return "";
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
  var replies = [reply, reply2, reply3];
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
  if(sign == "-"){
    progress--;
    wrongCount++;
  }
  console.log("progress " +  progress);

  return "";
}

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
  {id: "abair", file: "assets/rive/abair.rive"},
  {id: "tabhair", file: "assets/rive/tabhair.rive"},
  {id: "tar", file: "assets/rive/tar.rive"},
  {id: "bi", file: "assets/rive/bi.rive"},
  {id: "teigh", file: "assets/rive/teigh.rive"},
  {id: "ith", file: "assets/rive/ith.rive"},
  {id: "clois", file: "assets/rive/clois.rive"},
];

var userName;
var botName = "Taigin";
var progress;

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
  return progress;
}

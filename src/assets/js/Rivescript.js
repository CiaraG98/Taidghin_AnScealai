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
var botName = "Taidhgín";
var progress = 1;
var currentQuestion;
var prevQuestion = -1;
var wrongCount = 0;
var answer2;

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

function resetProgress(){
  progress = 0;
  wrongCount = 0;
  return "";
}
//var abairAimsirChaiteQuestions = new Array();
var abairAimsirChaiteQuestions = [
  {question: "___________ sí go raibh sé ar fheabhas.", answer: "dúirt"},
  {question: "___________ Liam go raibh sé tinn.", answer: "dúirt"},
  {question: "___________ na buachaillí nach raibh éinne eile ann.", answer: "dúirt"},
  {question: "___________ (sinn) nár chualamar an scéal sin riamh.", answer: "dúramar"},
  {question: "___________ mé é sin leat cheana.", answer: "dúirt"},
  {question: "___________ bean liom go ndúirt bean léi.", answer: "dúirt"},
  {question: "___________ (sinn) ár bpaidreacha ina dhiaidh sin.", answer: "dúramar"},
  {question: "___________ Síle go raibh an scéal sin fíor.", answer: "dúirt"},
  {question: "___________ sé go raibh brón air.", answer: "dúirt"},
  {question: "B’shin é a ___________ mé leat.", answer: "dúirt"}
];

var abairAimsirChaiteNi = [
  {question: "____ ___________ mé a leithéid riamh.", answer: "ní dúirt"},
  {question: "____ ___________ éinne é sin liom.", answer: "ní dúirt"},
  {question: "____ ___________ sí faic.", answer: "ní dúirt"},
  {question: "____ ___________ (sinn) go rabhamar bréan bailithe de.", answer: "ní dúramar"},
  {question: "____ ___________ tú é sin liom riamh.", answer: "ní dúirt"},
  {question: "____ ___________ Deirdre aon rud faoi.", answer: "ní dúirt"},
  {question: "____ ___________ (sinn) faic le héinne.", answer: "ní dúramar"},
  {question: "____ ___________ siad go raibh ocras orthu.", answer: "ní dúirt"},
  {question: "____ ___________ sibh aon rud liom.", answer: "ní dúirt"},
  {question: "____  ___________ tú é sin linn ag an am.", answer: "ní dúirt"}
];

var abairBriatharSaor = [
  {question: "___________ gur fear láidir a bhí ann ach níl a fhios ag éinne.", answer: "dúradh"},
  {question: "___________ gur ghoid sí é ach ní chreidim é sin.", answer: "dúradh"},
  {question: "____ ___________ aon rud mar sin sa chúirt.", answer: "ní dúradh"},
  {question: "____ ___________ riamh go raibh sé béalscaoilteach.", answer: "ní dúradh"},
  {question: "___________ go raibh sé beo bocht nuair a cailleadh é.", answer: "dúradh"},
  {question: "____ ___________ aon rud faoina cumas ceoil.", answer: "ní dúradh"},
  {question: "___________ go raibh sé i ndeireadh na feide faoin am a fuair siad é.", answer: "dúradh"},
  {question: "___________ nach raibh maith na muice lena deartháir riamh.", answer: "dúradh"},
  {question: "___________ gur tógadh go dealbh bocht iad.", answer: "dúradh"},
  {question: "___________ go raibh sí ar buile nuair a chuala sí é.", answer: "dúradh"}
];

var abairBriatharSaorCeisteach = [
  {question: "____ ___________ tú leis go raibh tú tinn?", answer: "an ndúirt", answer2:"nach ndúirt"},
  {question: "____ ___________ (sinn) leat go rabhamar ag dul ar laethanta saoire?", answer: "an ndúramar", answer2: "nach ndúramar"},
  {question: "____ ___________ mé é sin leat cheana?", answer: "an ndúirt", answer2: "nach ndúirt"},
  {question: "____ ___________ tú go raibh tú críochnaithe?", answer: "an ndúirt", answer2: "nach ndúirt"},
  {question: "___________ mé leat é míle is céad uair cheana?", answer: "", answer2: "nach ndúirt"},
  {question: "____ ___________ é sin i gcónaí? (Briathar Saor)", answer: "", answer2: "nach ndúradh"},
  {question: "____ ___________ (sinn) go mbeimis ag dul ann amárach?", answer: "an ndúirt", answer2: "nach ndúirt"},
  {question: "____ ___________ sé aon rud leat?", answer: "An ndúirt", answer2: "nach ndúirt"},
  {question: "____ ___________ siad aon rud leat faoi na fadhbanna a bhí acu?", answer: "an ndúirt", answer2: "nach ndúirt"}
];

var abairCoibhneasta = [
  {question: "___________ Seán liom go raibh an-lá acu.", answer: "dúirt"},
  {question: "____ ___________ mé a leithéid riamh i mo shaol.", answer: "ní dúirt"},
  {question: "____ ___________ tú é sin le héinne eile?", answer: "an ndúirt", answer2: "nach ndúirt"},
  {question: "____ ___________ mé leat gan é sin a rá go brách arís!", answer: "nach ndúirt"},
  {question: "Tá súil agam  ____ ___________ tú leis é. (dearfach)", answer: "go ndúirt"},
  {question: "Tá súil agam  ____ ___________ tú a leithéid sin léi siúd (diúltach)", answer: "nach ndúirt"},
  {question: "Tá gach ____ ___________ siad fíor is cosúil.", answer: "a dúirt"},
  {question: "____ ___________ tú inné nach raibh spéis dá laghad agat ann? (diúltach)", answer: "nach ndúirt"},
  {question: "Ní dóigh liom ____ ___________ mé é sin.", answer: "go ndúirt"},
  {question: "___________ i gcónaí gur tháinit an bhean sídhe nuair a bhí duine i mbéal a bháis.", answer: "dúradh"}
];

function getRandomQuestion(questions){
  var index = getRandomIntInclusive(0, questions.length - 1);
  //console.log("array: " + questions);
  //console.log("size: " + questions.length);
  //console.log("index: " +  index);
  if(index == prevQuestion) index++;
  prevQuestion = index;
  currentQuestion = questions[index];
  if("answer2" in currentQuestion){
    answer2 = currentQuestion.answer2;
  }
  console.log(currentQuestion.question + ", " + currentQuestion.answer + " " + answer2);
  return currentQuestion.question;
}

function getCurrentAnswer(){
  console.log(currentQuestion.answer);
  return currentQuestion.answer;
}

function getRandomReply(){
  var reply = "Maith thú, a " + getName();
  var reply2 = "An ceart ar fad agat, a " + getName();
  var reply3 = "Sin agat é, a " + getName();
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
  }
  if(sign == "-"){
    progress--;
    wrongCount++;
  }
  console.log("progress " +  progress);

  return "";
}

//test
function checkAnswer(answer){
  if(currentQuestion.answer == answer){
    changeProgress("+");
    if(progress != 3){
      return getRandomQuestion();
    }
  }
  else{
    changeProgress("-");
    return getRandomQuestion();
  }
}

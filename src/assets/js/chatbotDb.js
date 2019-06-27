var date = new Date();
var request = new XMLHttpRequest();
var id = 0234;
var messages = [
  {date: date, sentByBot: true, text: "Dia Dhuit! Is mise Taidhgín. Cad a thabharfaidh mé ort?"},
  {date: date, sentByBot: false, text: "Ciara is ainm dom"}
];

logs = [];
var botObj = {
  username: "Ciara",
  user_id: id,
  logs: logs
};

console.log(botObj);
var logToAdd = {date: date, topic: "AbairAC", complete: false, conversation: messages};
postLogToDb(logToAdd);
//postToDb(botObj);

function postToDb(chatbotObj){
  request.open('POST', 'http://localhost:4000/Chatbot/addUser', true);
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(chatbotObj));
  request.onload = function() {

  }
}

function postLogToDb(logObj){
  request.open('POST', 'http://localhost:4000/Chatbot/addLog/'+ "Ciara", true);
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(logObj));
  request.onload = function(){
    console.log(this.response);
  }
}

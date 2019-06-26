var chatbotObj = {
  person_name: getName(),
  bot_topic: getCurrentTopic()
};

var request = new XMLHttpRequest();
//changeTopic("abair", "faigh");

function postToDb(){
  request.open('POST', 'http://localhost:4000/Chatbot/addTopic', true);
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(chatbotObj));
  request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
  }
}

function getFromDb(){
  request.open('GET', 'http://localhost:4000/Chatbot/addTopic', true);
  request.setRequestHeader("Content-type", "application/json");
  request.send();
  request.onload = function(){

  }
}

function changeTopic(currentTopic, newTopic){
  request.open('POST', 'http://localhost:4000/Chatbot/changeTopic/'+newTopic, true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(currentTopic);
  request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data);
  }
}

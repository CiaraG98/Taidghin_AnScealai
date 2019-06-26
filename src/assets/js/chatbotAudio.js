var audio_reply = "";
var audio_array = [];
var hideAudio = false;
var request = new XMLHttpRequest();

function showAudio(){
  var triangle = document.querySelector(".tri");
  var audio = document.querySelector(".bot-audio");
  if(hideAudio == false){
    audio.style.display = "flex";
    triangle.style.display = "flex";
    hideAudio = true;
  }
  else if(hideAudio){
    audio.style.display = "none";
    triangle.style.display = "none";
    hideAudio = false;
  }
}

function audio(reply){
  var print = document.querySelector(".test");
  audio_reply = reply;
  var index = audio_reply.indexOf(":");
  if(index == -1){
    print.innerHTML = audio_reply;
  }
  else{
    audio_reply = audio_reply.substr(0, index);
    print.innerHTML = audio_reply;
  }
}

/*request.open('GET', 'https://www.abair.tcd.ie/api/?input=Dia dhuit, cad e mar ata tu&format=mp3&synth=ga_UL_anb_nnmnkwii', true);
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.send();
request.onload = function(){
  var data = this.response;
  console.log(data);
}*/

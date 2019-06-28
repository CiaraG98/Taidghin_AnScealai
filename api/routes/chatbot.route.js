const express = require('express');
const app = express();
const chatbotRoute = express.Router();
const fs = require('fs');

// Require Chatbot model in our routes module
let Models = require('../models/Chatbot');

//Add user started
chatbotRoute.route('/addUser').post(function(req, res){
  let bot = new Models.Chatbot(req.body);
  console.log(bot);
  bot.save().then(bot => {
    res.status(200).send("Saved to DB");
  })
    .catch(err => {
      res.status(400).send("unable to save to DB");
    });
});

//Add to logs by id/name
chatbotRoute.route('/addLog/:name').post(function(req, res){
  let log = new Models.Log(req.body);
  let date = log.date;
  fs.appendFileSync('./logs.txt', "\n" + "Date: " + date + "\n", function(err){
    if(err) console.log(err);
    else console.log("fs logged");
  });
  for(i = 0; i < log.conversation.length; i++){
    console.log(log.conversation[i].text);
    var from = "";
    if(log.conversation[i].sentByBot == true) from = "Bot: ";
    else from = "User: ";

    fs.appendFileSync('./logs.txt', from + log.conversation[i].text + "\n", function(err){
      if(err) console.log(err);
      else console.log("fs logged");
    });
  }
  Models.Chatbot.findOne({"username": req.params.name}, function(err, bot){
    //console.log(bot.username);
    //console.log(JSON.stringify(bot.logs));
    bot.logs.push(log);
    bot.save().then(bot =>{
      res.json('Update complete');
    }).catch(err => {
      res.status(400).send("Unable to update");
    });
    //console.log(JSON.stringify(bot.logs));
  });
});

//clear logs by username
chatbotRoute.route('/clearLogs/:name').get(function(req, res){
  Models.Chatbot.findOne({"username": req.params.name}, function(err, bot){
    if(err) res.status(400).send("Unable to update");
    else{
      bot.logs = [];
      bot.save().then(bot => {
        res.json('logs removed');
      })
      res.status(200).send("Logs Removed");
    }
  });
});

module.exports = chatbotRoute;

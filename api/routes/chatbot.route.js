const express = require('express');
const app = express();
const chatbotRoute = express.Router();
const fs = require('fs');

// Require Chatbot model in our routes module
let Chatbot = require('../models/Chatbot');

//Add topic started by user
chatbotRoute.route('/addTopic').post(function(req, res){
  let bot = new Chatbot(req.body);
  console.log(bot);
  bot.save().then(bot => {
    res.json(bot);
  })
    .catch(err => {
      res.status(400).send("unable to save to DB");
    });
});

//Get topic started by user to continue
chatbotRoute.route('/getTopics').get(function(req, res){

});


//Store conversations with bot (logs)
chatbotRoute.route('/logs').post(function(req, res){

});

chatbotRoute.route('/changeTopic/:topic').post(function(req, res){
  var topic = req.params.topic;
  var currentTopic = req.body;
  console.log(topic);
  console.log(currentTopic);
});

module.exports = chatbotRoute;

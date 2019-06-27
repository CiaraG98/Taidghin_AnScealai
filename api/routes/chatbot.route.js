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
  //console.log(req.body);
  let log = new Models.Log(req.body);
  //console.log(log);
  Models.Chatbot.findOne({"username": req.params.name}, function(req, bot){
    console.log(bot.username);
    console.log(JSON.stringify(bot.logs));
    bot.logs.push(log);
    bot.save().then(bot =>{
      res.json('Update complete');
    }).catch(err => {
      res.status(400).send("Unable to update");
    });
    console.log(JSON.stringify(bot.logs));
  });
});

module.exports = chatbotRoute;

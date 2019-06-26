// Chatbot.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Chatbot
let Topics = new Schema({name: String});
let Chatbot = new Schema({
  person_name: {
    type: String
  },
  bot_topic: {
    type: String
  }
  //bot_topics_completed: [Topics],
  //bot_topics_started: [Topics],
  //bot_user_logs: {},
},
  {
    collection: 'chatbot'
});

module.exports = mongoose.model('Chatbot', Chatbot);

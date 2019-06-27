// Chatbot.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Chatbot
let Message = new Schema({
  date: { type: Date },
  sentByBot: { type: Boolean },
  text: { type: String },
});

let Log = new Schema({
  date: { type: Date },
  topic: { type: String },
  complete: { type: Boolean },
  conversation: [Message],
});

var LogModel = mongoose.model('Log', Log);

let Chatbot = new Schema({
  username: { type: String },
  user_id: { type: Number },
  logs: [Log],
},
  {
    collection: 'chatbot'
});

var ChatbotModel = mongoose.model('Chatbot', Chatbot);
//module.exports = mongoose.model('Chatbot', Chatbot);
module.exports = {
  Log: LogModel,
  Chatbot: ChatbotModel
}

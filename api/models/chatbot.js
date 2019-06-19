// Business.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  person_name: {
    type: String
  },
  bot_name: {
    type: String
  },
},{
    collection: 'chatbot'
});

module.exports = mongoose.model('Chatbot', Chatbot);

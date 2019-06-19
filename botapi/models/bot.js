var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Chatbot = new Schema({
  userName: {
    type: String,
    required: true
  },
  userId: {
    type: String
  }
});

module.exports = mongoose.model('Chatbot', Chatbot);

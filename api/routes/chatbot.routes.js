const express = require('express');
const app = express();
const chatbotRoutes = express.Router();

// Require Chatbot model in our routes module
let Chatbot = require('../models/Chatbot');

//Defined store route

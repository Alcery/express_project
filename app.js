const pug = require('pug');
const fetch = require('node-fetch');
const path = require('path');
var express = require('express');
var app = express();
var request = require("request");
const port = 8080;


var options = {
    method: 'GET',
    url: 'https://wordsapiv1.p.rapidapi.com/words/bellwether',
    headers: {
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    }
  };
  
  request(options, function (error, response, body) {
      if (error) throw new Error(error);
  
      console.log(body);
  });

app.set('view engine', 'pug');
app.set("views", path.join(__dirname,"views"));

app.use("/static", express.static(path.join(__dirname,"public")));

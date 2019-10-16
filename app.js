const pug = require('pug');
const fetch = require('node-fetch');
const path = require('path');
var express = require('express');
var app = express();
var unirest = require("unirest");
const port = 8080;


var req = unirest("GET", "https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf");

req.headers({
	"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
	"x-rapidapi-key": "4a0a9d7d1cmshd592e3155a948f3p1ee0dfjsn57de095afac7"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

app.set('view engine', 'pug');

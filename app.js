const pug = require('pug');
const fetch = require('node-fetch');
const path = require('path');
var express = require('express');
var app = express();
const port = 8080;

app.set('view engine', 'pug');
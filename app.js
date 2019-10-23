var express = require('express');
const fetch = require('node-fetch');
const path = require('path');
var app = express();

const port = 8080;
var url = "https://wordsapiv1.p.rapidapi.com/words/sesquipedalian/definitions"
var url2 = "https://wordsapiv1.p.rapidapi.com/words/Perfidiousness/definitions"
var url3 = "https://wordsapiv1.p.rapidapi.com/words/Penultimate/definitions"
var url4 = "https://wordsapiv1.p.rapidapi.com/words/Circumlocution/definitions"
var url5 = "https://wordsapiv1.p.rapidapi.com/words/Bellwether/definitions"


app.set('view engine', 'pug');
app.set("views", path.join(__dirname,"views"));

app.use("/static", express.static(path.join(__dirname,"public")));



app.get('/', (req, res) => {
 fetch(url)
  .then(res => res.json())
  .then(
    (json) => {
      res.render('index', {
        word: json
      })
    })
  });
app.get('/2', (req, res) => {
 fetch(url2)
  .then(res => res.json())
  .then(
    (json) => {
      res.render('2', {
        word: json
      })
    })
  });
app.get('/3', (req, res) => {
 fetch(url3)
  .then(res => res.json())
  .then(
    (json) => {
      res.render('3', {
        word: json
      })
    })
  });
app.get('/4', (req, res) => {
 fetch(url4)
  .then(res => res.json())
  .then(
    (json) => {
      res.render('4', {
        word: json
      })
    })
  });
app.get('/5', (req, res) => {
 fetch(url5)
  .then(res => res.json())
  .then(
    (json) => {
      res.render('5', {
        word: json
      })
    })
  });


  
  
const server = app.listen(port, () =>{
  console.log(`Express running - PORT ${server.address().port}`)
})

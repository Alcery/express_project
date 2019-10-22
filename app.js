var express = require('express');
const fetch = require('node-fetch');
const path = require('path');
var app = express();

const port = 8080;
var url = "https://wordsapiv1.p.rapidapi.com/words/sesquipedalian/definitions"


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
  
  
const server = app.listen(port, () =>{
  console.log(`Express running - PORT ${server.address().port}`)
})

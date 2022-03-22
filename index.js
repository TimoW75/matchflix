const express = require('express')
const app = express();
const { engine } = require('express-handlebars');
const mongoose = require('mongoose')
const sass = require('sass')

const PORT = process.env.PORT || 3000

app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main'
  }));
  app.set('view engine', '.hbs');
  app.set("views", "./views");

app.get('/',  (req, res) => {
    res.render('index.hbs')
})

// DIT IS EEN TEST
app.get('/test',  (req, res) => {
  res.render('gegevens_bewerken')
})

app.listen(PORT)  // gebruik deze poort
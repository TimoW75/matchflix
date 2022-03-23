const express = require('express')
const app = express();
const { engine } = require('express-handlebars');
const req = require('express/lib/request');
const mongoose = require('mongoose')
const sass = require('sass');
// const serieLijst = require('./controller/series');
const PORT = process.env.PORT || 3000
const {serieLijst} = require('./controller/series')

app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main'
  }));
  app.set('view engine', '.hbs');
  app.set("views", "./views");



app.get('/',  (req, res) => {
    res.render('index.hbs')
})


app.get('/series', (req ,res) =>{
  res.render('series.hbs')

})

serieLijst();

// console.log(serieLijst)

app.listen(PORT)  // gebruik deze poort
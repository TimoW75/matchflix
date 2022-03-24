const express = require('express')
const app = express();

//Database connection
const connectDB = require("./config/db");
require("dotenv").config();
connectDB();


//Express-Handlebars
const { engine } = require('express-handlebars');
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main'
  }));
  app.set('view engine', '.hbs');
  app.set('views', './views');
  app.use(express.static(__dirname + '/static'));



// Body parser
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });


// Routes
const routes = require('./routes');
app.use('/', urlencodedParser, routes);


// console.log(serieLijst)

app.listen(PORT, () => {
	console.log(`App listening on localhost:${PORT}`);
});
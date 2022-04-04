const express = require('express')
const app = express();
const http = require('http');
const { engine } = require('express-handlebars');
const session = require('express-session');
const mongoose = require('mongoose');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
require('dotenv').config();
const PORT = process.env.PORT || 3000


//Database connection
const connectDB = require("./config/db");
connectDB();

// Express-Session
app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false, 
  saveUninitialized: true 
}));

//Express-Handlebars
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  }
  ));
  app.set('view engine', '.hbs');
  app.set('views', './views');
  app.use(express.static(__dirname + '/static'));



// Body parser
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });


// Routes
const routes = require('./routes');
app.use('/', urlencodedParser, routes);

//Socket.io
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});



// console.log(serieLijst)

server.listen(PORT, () => {
	console.log(`App listening on localhost:${PORT}`);
});
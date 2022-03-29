const express = require("express");
const router = express.Router();
const controller = require('../controllers/chat');
const { Server } = require("socket.io");
const io = new Server(server);



router.get('/', controller.chat);


module.exports = router;
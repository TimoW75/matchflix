const express = require("express");
const router = express.Router();
const controller = require('../controllers/update');
const User = require('../models/user');


router.get('/', controller.update);
router.post('/', controller.gewijzigd);


module.exports = router; 

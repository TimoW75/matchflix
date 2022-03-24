const express = require('express');
const router = express.Router();


const home  = require('./home');
const login  = require('./login');
const series = require('./series');



router.use('/', home);
router.use('/login', login);
router.use('/series', series);



module.exports = router;
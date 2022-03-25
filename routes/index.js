const express = require('express');
const router = express.Router();


const home  = require('./home');
const login  = require('./login');
const series = require('./series');
const match = require('./match');



router.use('/', home);
router.use('/login', login);
router.use('/series', series);
router.use('/match', match);



module.exports = router;
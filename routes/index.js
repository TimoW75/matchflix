const express = require('express');
const router = express.Router();

const home = require('./home');
const login = require('./login');
const register = require('./register');
const logout = require('./logout');
const series = require('./series');
const match = require('./match');
const update = require('./update');
const chat = require('./chat');


router.use('/', home);
router.use('/login', login);
router.use('/register', register);
router.use('/logout', logout);
router.use('/series', series);
router.use('/match', match);
router.use('/update', update);
router.use('/chat', chat);


module.exports = router;
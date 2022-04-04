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
const like = require('./like');
const dislike = require('./dislike');
const matchList = require('./matchList');


router.use('/', home);
router.use('/login', login);
router.use('/register', register);
router.use('/logout', logout);
router.use('/series', series);
router.use('/match', match);
router.use('/update', update);
router.use('/chat', chat);
router.use('/like', like);
router.use('/dislike', dislike);
router.use('/matchList', matchList);



module.exports = router;
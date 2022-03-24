const express = require('express');
const router = express.Router();

const home = require('./home');
const login = require('./login');
const register = require('./register');
const logout = require('./logout');
const series = require('./series');

router.use('/', home);
router.use('/login', login);
router.use('/register', register);
router.use('/logout', logout);
router.use('/series', series);

module.exports = router;
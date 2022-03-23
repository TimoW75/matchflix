//const modelName = require('../models');

const login = (req, res) => {
	res.render('login');
};

const loggedIn = (req, res) => {
    res.render('login');
}


module.exports = {
    login: login,
    loggedIn: loggedIn,
};

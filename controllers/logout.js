let session;

// Logs out the user from the application (destroys session)
const logoutFunction = (req, res) => {
    session = req.session;
    session.destroy();
    res.redirect('/login');
}

module.exports = {
    logoutFunction: logoutFunction,
};
let session;

// Logs out the user from the application (destroys session)
const logout = (req, res) => {
    session = req.session;
    session.destroy();
    res.redirect('/login');
}

module.exports = {
    logout: logout,
};
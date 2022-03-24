let session;

const logout = (req, res) => {
    session = req.session;
    session.destroy();
    res.redirect('/login');
}

module.exports = {
    logout: logout,
};
const chat = (req, res) => {
    //authenticatie
    session = req.session
    if (!session.email) {
        console.log("Je moet ingelogd zijn om hier te kunnen komen.")
        res.redirect('/login')
    } else {
        res.render('chat');
    }
};

module.exports = {
    chat: chat,
};
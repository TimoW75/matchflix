const update = (req, res) => {
	res.render('update');
};

const gewijzigd = (req, res) => {
    res.render('gewijzigd');
}

let session;

// --
// router.post('/gewijzigd', (req, res) => {
//     session = req.session;
//     User.updateOne({
//       gebruikersnaam: session.gebruikersnaam
//     }, {
//       voornaam: req.body.voornaam,
//       achternaam: req.body.achternaam,
//       gebruikersnaam: req.body.gebruikersnaam,
//       email: req.body.email
//     }).exec();
//     session.gebruikersnaam = req.body.gebruikersnaam;
//     res.redirect('/profiel');
//   })
// --


module.exports = {
    update: update,
    gewijzigd: gewijzigd,
};

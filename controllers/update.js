const update = (req, res) => {
	res.render('update');
};

const gewijzigd = (req, res) => {
    res.render('gewijzigd');
}


module.exports = {
    update: update,
    gewijzigd: gewijzigd,
};

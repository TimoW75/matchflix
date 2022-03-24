const fetch = require('node-fetch')



const serieLijst = (req, res) => {
    //  fetch('https://www.episodate.com/api/most-popular?page=1')
    // .then(response => response.json())
    // .then(series => console.log(series));

    res.render('series');
}



module.exports = {
    serieLijst: serieLijst,
};

// https://www.episodate.com/api

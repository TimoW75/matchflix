const fetch = require('node-fetch')



function serieLijst() {
    return fetch('https://www.episodate.com/api/most-popular?page=1')
    .then(response => response.json())
    // .then(series => console.log(series));
}


module.exports = serieLijst

// https://www.episodate.com/api


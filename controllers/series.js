const fetch = require('node-fetch')

const series = (req, res) => {
	res.render('series',{
        id: 49269,
        name: 'Miraculous LadyBug',
        permalink: 'miraculous-ladybug',
        start_date: '2015-09-01',
        end_date: null,
        country: 'FR',
        network: 'TF1',
        status: 'Running',
        image_thumbnail_path: 'https://static.episodate.com/images/tv-show/thumbnail/49269.jpg'
      })
};

const seriesSubmit = (req, res) => {
    res.render('series' )
}


module.exports = {
    series: series,
    seriesSubmit: seriesSubmit,
};


//https://www.episodate.com/api/most-popular?page=1
// https://www.episodate.com/api


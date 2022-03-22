const fetch = require('node-fetch')


// const series =  fetch('https://www.episodate.com/api/most-popular?page=1');
// const serieLijst = series.json();
// console.log(serieLijst)

fetch('https://www.episodate.com/api/most-popular?page=1')
  .then(response => response.json())
  .then(data => console.log(data));

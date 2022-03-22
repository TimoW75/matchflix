



async function serieList(){
    const series = await fetch('https://www.episodate.com/api/most-popular?page=1')
    console.log(series)
  
}

serieList();
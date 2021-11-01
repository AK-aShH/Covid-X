
const getCovidData = async () => {
          console.log("index.html 10 | Processing...");
          const request = await fetch("https://covid19.mathdro.id/api");
          const data = await request.json();
          return data;
        };
    
        const getMoreAPIDataWithUrl = async (newUrl) => {
          const request = await fetch(newUrl);
          const data = await request.json();
          return data;
        }
    
        getCovidData().then(covidData => {
          console.log("index.html 16 | covid data", covidData);
          document.getElementById("total-cases").innerText =
            covidData.confirmed.value;
    
          getMoreAPIDataWithUrl(covidData.confirmed.detail).then(newData=>{
            console.log('index.html 22 | more covid data', newData);
            document.getElementById("city-of-origin").innerText =
            newData[0].confirmed;
          })
        });
    
        


/*fetch("https://url-shortener-service.p.rapidapi.com/shorten", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
		"x-rapidapi-key": "57eaaa76f3msh89ffb690588195ap14abb8jsnf4110c4f1016"
	},
	"body": {
		"url": "https://google.com/"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

// Get current playing song
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("/me/player/currently-playing", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  // Get lyrics of a song
  var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.lyrics.ovh/v1//", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  */
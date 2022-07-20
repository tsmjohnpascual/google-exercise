const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
const path = require("path")

const options = {
	method: 'GET',
	headers: {
		'X-User-Agent': 'desktop',
		'X-Proxy-Location': 'EU',
		'X-RapidAPI-Key': '143c94ba97mshe6529c6df88575ep1a5f73jsn63e72cb01971',
		'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
	}
};

function displayData (text) {

    const display = document.getElementById('text');
    display.textContent = text;

}

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

app.use(express.static(__dirname + "/../client"))
app.get('/', (req, res) => res.sendFile(path.resolve("../client/index.html")))



app.get ('/search', (req, res) => {
    fetch('https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk', options)
	.then(response => response.json())
	.then(response => res.json(response))
	.catch(err => console.error(err));
    
})
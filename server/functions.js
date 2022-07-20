const fetch = require('node-fetch');
const url = "https://google-search3.p.rapidapi.com/api/v1/search/q="
const options = {
	method: 'GET',
	headers: {
		'X-User-Agent': 'desktop',
		'X-Proxy-Location': 'EU',
		'X-RapidAPI-Key': '143c94ba97mshe6529c6df88575ep1a5f73jsn63e72cb01971',
		'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
	}
}

const getURL = (search) => {
    return `${url}${search}`
}

const luckySearch = (req, res) => {
    let searchUrl = getURL(req)
    fetch(searchUrl, options)
    .then(response => response.json())
    .then(response => {
        res.redirect(response.results[0].link)
    })
}

const googleSearch = (req, res) => {
    let searchUrl = getURL(req)
    fetch(searchUrl, options)
    .then(response => response.json())
    .then(response => res.json(response).textContent)
    .catch(err => console.error(err));
}


module.exports = { getURL, luckySearch, googleSearch}
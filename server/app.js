const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
const path = require("path")
const bodyParser = require("body-parser")
const searchFunctions = require("./functions")

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + "/../client"))
app.use(express.static(__dirname + "/../client/assets"));

app.get('/', (req, res) => res.sendFile(path.resolve("../client/index.html")))

app.post("/", (req, res) => {

    let search = req.body.q
    if (req.body.searchBtn == "Google Search") {
        searchFunctions.googleSearch(search, res)
    } else if (req.body.searchBtn == "I'm Feeling Lucky") {
        searchFunctions.luckySearch(search, res)
    }

})




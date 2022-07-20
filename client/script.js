const searchFunctions = require("../server/functions")
const googleSearchButton = document.getElementById("google_search")
const feelingLuckyButton = document.getElementById("feeling_lucky")

googleSearchButton.addEventListener("submit", searchFunctions.determineSearch(googleSearchButton.id))
feelingLuckyButton.addEventListener("submit", searchFunctions.determineSearch(feelingLuckyButton.id))





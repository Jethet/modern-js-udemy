// For API token, see .env file in GitHubFinder project

// Initialize weather object
const weather = new Weather("Amsterdam", "NL");

const ui = new UI()

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// This function must be called when the DOM loads, see eventlistener above
function getWeather() {
weather.getWeather() // getWeather is async (see weather.js) returns a promise
  .then((results) => {
    ui.paint(results)
  })
  .catch((err) => console.log(err));
}
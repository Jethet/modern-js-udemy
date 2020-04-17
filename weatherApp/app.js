// For API token, see .env file in GitHubFinder project

// Initialize storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialize weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.querySelector("#w-change-btn").addEventListener("click", (e) => {
  const city = document.querySelector("#city").value;
  const country = document.querySelector("#country").value;

  // Change location
  weather.changeLocation(city, country);

  // Set location in local storage
  storage.setLocationData(city, country)

  // Get and display weather in new location
  getWeather();

  // Close modal: done with jQuery because Bootstrap uses that
  $("#locModal").modal("hide");
  $('#locModal').on('hidden.bs.modal', function () {
    $('#locModal form')[0].reset();
    });
});


// This function must be called when the DOM loads, see eventlistener above
function getWeather() {
  weather
    .getWeather() // getWeather is async (see weather.js) returns a promise
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}

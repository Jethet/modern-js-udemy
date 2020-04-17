class UI {
  constructor() {
    this.location = document.querySelector("#w-location");
    this.desc = document.querySelector("#w-desc");
    this.string = document.querySelector("#w-string");
    this.details = document.querySelector("#w-details");
    this.icon = document.querySelector("#w-icon");
    this.temp = document.querySelector("#w-temp");
    this.feelsLike = document.querySelector("#w-feels-like");
    this.tempMin = document.querySelector("#w-temp-min");
    this.tempMax = document.querySelector("#w-temp-max");
    this.humidity = document.querySelector("#w-humidity");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = `Currently ${weather.weather[0].description}`;
    this.string.textContent = weather.main.temp + " Celsius";
    // Set source of icon as attribute:
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.temp.textContent = `Current temperature: ${weather.main.temp} degrees`
    this.feelsLike.textContent = `Visibility: ${weather.visibility} metres`
    this.tempMin.textContent = `Minimum temperature: ${weather.main.temp_min} degrees`
    this.tempMax.textContent = `Maximum temperature: ${weather.main.temp_max} degrees`
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity} percent`
}
}
"use strict";
// OPEN WEATHER API INFORMATION
const apiKey = "4c4edad1ef476b69e85ca8ec66880af0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

// QUERY SELECTORS
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherContainer = document.querySelector(".weather");
const weatherIcon = document.querySelector(".weather-icon");

// RETRIEVING WEATHER INFORMATION
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  document.querySelector(".city").textContent = data.name;
  document.querySelector(".temp").textContent =
    Math.round(data.main.temp) + "°F";
  document.querySelector(".humidity").textContent = data.main.humidity + "%";
  document.querySelector(".wind").textContent = data.wind.speed + "mph";

  // RETRIEVING CORRECT IMAGES
  const weatherIconMappings = {
    Clouds: "images/clouds.png",
    Rain: "images/rain.png",
    Clear: "images/clear.png",
    Drizzle: "images/drizzle.png",
    Mist: "images/mist.png",
    Snow: "images/snow.png",
  };

  const weatherCondition = data.weather[0].main;
  const defaultIcon = "images/default.png"; // Set a default icon path if needed

  weatherIcon.src = weatherIconMappings[weatherCondition] || defaultIcon;
}

// SEARCH BUTTON EVENT LISTENER
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  const weatherContainer = document.querySelector(".weather");
  weatherContainer.classList.remove("hidden");
});
